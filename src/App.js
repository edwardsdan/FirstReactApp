import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

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

    // alternative to above
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

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    let people = null
    
    // if true, render contents
    if (this.state.showPeople) {
      people = (
        <div>
          {this.state.people.map((person, index) => {
            return (
              <Person 
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.nameChangedHandler(event, person.id)} />
            )
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi! I'm a react app!</h1>
        <p>This is really working!</p>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Toggle People
        </button>
        {people}
        {/* renders object if it's not null */}
      </div>
    );
  }
}

export default App;
