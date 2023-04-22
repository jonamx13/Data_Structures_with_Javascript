// const array = ['Diego', 'Jonathan', 'Eduardo'];

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    get(index) {
        return this.data[index];
    }

    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
    
    pop() {
        const lastItem = this.data[this.length - 1];
        delete this.data[this.length - 1];
        this.length--;
        return lastItem
    }

    delete(index) {
        const item = this.data[index];
        this.shiftIndex(index);

        return item;
    }

    shiftIndex(index) {
        for(let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1];
        this.length--;
    }
    
    //TODO: shift and unshift methods
    sort() {
        Object.keys(this.data).reduce((accVal,currVal) => {
            accVal[currVal] = this.data[currVal];
            return accVal
        }, {});
    }
    shift() {
        delete this.data[0];
        this.length--;
        Object.keys(this.data).forEach(key => {
            this.data[key - 1] = this.data[key];
            delete this.data[key]
        })
    }
    
    unshift(item) {
        for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[0] = item;
        this.length++;
        return this.data;
    }
}

const myArray = new MyArray();