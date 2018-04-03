import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  // Declare state (class-wide variable) that, when updated,
  // tells React.js to re-render all or part of the DOM
  state = {
    people: [
      {id: 'asdf1', name: 'Max', age: 28},
      {id: 'qwer12', name: 'Manu', age: 29},
      {id: 'zxcv354', name: 'Stephanie', age: 26}
    ],
    showPeople: false
  };

  deletePersonHandler = (personIndex) => {
    const temp = [...this.state.people];
    temp.splice(personIndex, 1);
    this.setState({people: temp});
  }

  nameChangedHandler = (event, id) => {
    // Edits state to contain some object returned from event
    const personIndex = this.state.people.findIndex(x => {
      return x.id === id;
    });

    const person = {
      ...this.state.people[personIndex]
    };

    // alternative to above const
    // no different, just more verbose
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const temp = [...this.state.people];
    temp[personIndex] = person;

    this.setState({people: temp});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPeople;
    this.setState({showPeople: !doesShow});
  }

  render() {

    let people = null
    
    // if true, render contents
    if (this.state.showPeople) {
      people = (
          <Persons
          persons={this.state.people} 
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}/>
      );
    }

    return (
        <div className={classes.App}>
          <Cockpit 
            showPeople={this.state.showPeople}
            people={this.state.people}
            clicked={this.togglePersonsHandler}/>
          {people}
          {/* renders object if it's not null */}
        </div>
    );
  }
}

export default App;