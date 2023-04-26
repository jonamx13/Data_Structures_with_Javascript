class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }
    hashMethod(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash  = (hash + key.charCodeAt(i) * i) % this.data.length;
            
        }
        return hash;
    }
    set(key, value) {
        const address = this.hashMethod(key);
        if(!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }
    get(key) {
        const address = this.hashMethod(key);
        const currentBucket = this.data[address];
        if(currentBucket) {
            for(let i = 0; i < currentBucket.length; i++) {
                if(currentBucket[i][0] === key) {
                    return currentBucket[i][1];
                }
            }
        }
        return undefined;
    }
}

const myHashTable = new HashTable(50);

myHashTable.set('Jonathan', 1994); //> 8:Array >> 0: ['Jonathan', 1994]
myHashTable.set('Jona', 1990); //> 22:Array >> 0: ['Jona', 1990]
// Collision
myHashTable.set('Diego', 1990); //> 10:Array >> 0: ['Diego', 1990]
myHashTable.set('Mariana', 1998); // 10: Array >> 0: ['Diego', 1990] 1: ['Mariana', 1998]

console.log(myHashTable.data);
//*Output
/*
    [
//!  <8 empty items>,
//?  [ ['Jonathan', 1994] ],
//!  <1 empty item>,
//*  [ ['Diego', 1990], ['Mariana', 1998] ] <<< Collision
//!  <11 empty items>,
//?  [ ['Jona', 1990] ]
//!  <27 empty items>
    ]
*/

console.log(myHashTable.get('Jona')); //> 1990
console.log(myHashTable.get('Mariana')); //> 1998
console.log(myHashTable.get('Maria')); //> undefined