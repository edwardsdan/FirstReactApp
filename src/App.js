import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  // Declare state (class-wide variable) that, when updated,
  // tells React.js to re-render all or part of the DOM
  state = {
    people: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ],
    showPeople: false
  };

  switchNameHandler = (newName) => {
    // DON'T DO THIS: this.state.people[0].name = 'Maximilian';
    // Edits state to contain variable(s) from parameters
    this.setState({people: [
        {name: newName, age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 27}
      ]
    });
  }

  nameChangedHandler = (event) => {
    // Edits state to contain some object returned from event
    this.setState({people: [
      {name: 'Max', age: 28},
      {name: event.target.value, age: 29},
      {name: 'Stephanie', age: 26}
    ]
  });
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
          <Person
            name={this.state.people[0].name}
            age={this.state.people[0].age} />
          <Person
            name={this.state.people[1].name}
            age={this.state.people[1].age}
            click={this.switchNameHandler.bind(this, 'Max!')}
            changed={this.nameChangedHandler}>
            My Hobbies: Racing
          </Person>
          <Person
            name={this.state.people[2].name}
            age={this.state.people[2].age} />
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
