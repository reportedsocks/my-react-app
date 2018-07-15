import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {name: "Dan", age: 17},
      {name: "Veronika", age: 8},
      {name: "Misha", age: 19}
    ]
  }
  switchNameHandler = (newName) =>{
    //console.log("Clicked!");
    this.setState({persons: [
      {name: newName, age: 17},
      {name: "Veronika", age: 48},
      {name: "Misha", age: 19}
    ]})
  }

  changedNameHandler = (event) =>{
    //console.log("Clicked!");
    this.setState({persons: [
      {name: "Dan", age: 17},
      {name: "Veronika", age: 48},
      {name: event.target.value, age: 19}
    ]})
  }

  render() {

    const style = {
      backgroundColor: "#eee",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px"
    };

    return (
      <div className="App">
        <h1>Hello world!</h1>
        <button style={style} onClick={() => this.switchNameHandler("Daniil")}>Switch name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this,"Dan!")}/>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}
          changed={this.changedNameHandler}>
          Hobby: annoying people
        </Person>
      </div>
    );
  }
}

export default App;
