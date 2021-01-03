/* eslint-disable */
import { observable, action, makeObservable } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    constructor() {
        this.list = []
        this.length = this.list.length
        // your code here
        makeObservable(this, {
            list: observable,
            length: observable,
            checkItem: action,
            addItem: action,
            editItem: action
        })
    }
    checkItem = (name) => {
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed
    } 
    addItem = (newItem) => {
        let newI = new Item(newItem)
        this.list.push(newI)
    }
    editItem = (name, newName) => {
        let item = this.list.find(i => i.name === name)
        item.name = newName
        // your code here
    }
    deleteItem = (name) => {
        // your code here
        let index = this.list.indexOf(name)
        this.list.splice(index, 1)
    }
}

