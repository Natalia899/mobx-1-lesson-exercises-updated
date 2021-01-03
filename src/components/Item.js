import React, { Component } from 'react';
import { observer } from 'mobx-react'

class Item extends Component {
  checkItem = (e) => {
    this.props.store.checkItem(e.target.value)
  }
  editItem = () => {
    let newName = prompt('new')
    console.log(this.props.item.name);
    this.props.store.editItem(this.props.item.name, newName)
    //your code here
  }
  deleteItem = () => {
 this.props.store.deleteItem(this.props.item.name)
    //your code here
  }
  render() {
    let item = this.props.item
    return (
      <div>
        <div className={item.completed ? "crossed" : null}>
          <input type="checkbox" onClick={this.checkItem} value={item.name} />
          {item.name}
        </div>
        <p>{item.location} </p>
        <button onClick={this.editItem}>Edit</button>
        <button onClick={this.deleteItem}>X</button>

      </div>)
  }
}

export default observer(Item)