import React from 'react'

export class Test {
    name = '';
    
    constructor(name) {
        this.name = name;
    }

    display() {
        console.log('hello, ' + this.name);
    }
}

