import React, { Component } from "react";
import TodoItems from "./components/TodoItems/TodoItems";
import AddItems from "./components/AddItems/AddItems";
import "./App.css";
export default class App extends Component {
  state = {
    items: [
      { id: 0, task: "Buy new Notebook", timetotake: 23 },
      { id: 1, task: "Study Javascript", timetotake: 63 },
      { id: 2, task: "Get a new Printer", timetotake: 90 },
    ],
  };
  deleteItem = (id) => {
    const { items } = this.state;
    // oneway //
    // let i = items.findIndex((item) => item.id === id);
    // items.splice(i, 1);
    // this.setState({ items });
    // anotherway //
    // filter return true
    let filteredItems = items.filter((item) => {
      return item.id !== id;
    });
    this.setState({ items: filteredItems });
  };

  addItem = (item) => {
    item.id = Math.random();
    let items = this.state.items;
    items.push(item);
    this.setState({ items });
  };

  render() {
    return (
      <div className="AppContainer">
        <div className="AppName">
          <div className="Title">
            <h2>TODO LIST</h2>
          </div>
          <div className="App">
            <AddItems addItem={this.addItem} />
            <TodoItems items={this.state.items} deleteItem={this.deleteItem} />
          </div>
        </div>
      </div>
    );
  }
}
