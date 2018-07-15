import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      {id:"asdfsa", name: "Dan", age: 17},
      {id:"rewers", name: "Veronika", age: 8},
      {id:"qweqwe", name: "Misha", age: 19}
    ],
    showPersons: false
  }
  
  togglePersonsHandler=() =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons:!doesShow});
  }

  changedNameHandler = (event, id) =>{
    const personIndex = this.state.persons.findIndex(p =>{
      return p.id ===id
    });

    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons})
  }

  deletePersonHandler =(index) =>{
    const persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState({persons : persons});
  }

  render() {

    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px"
    };

    let persons =null;
    if(this.state.showPersons){
      persons= (
        <div>
          {this.state.persons.map((persons,index) =>{
            return <Person 
              click={()=> this.deletePersonHandler(index)}
              name={persons.name} 
              age={persons.age}
              key={persons.id} 
              changed={(event)=> this.changedNameHandler(event,persons.id)}/>
          })}
        </div>
      );

      style.backgroundColor = "red";
      
    }

    const classes = [];
    if(this.state.persons.length <=2){
      classes.push('red');
    }
    if(this.state.persons.length <=1){
      classes.push('bold');
    }

    return (
      <div className="App">
        <h1>Hello world!</h1>
        <p className={classes.join(" ")}>I change my color and font weight depending on number of persons!</p>
        <button style={style} onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
