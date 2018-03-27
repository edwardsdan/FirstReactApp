import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    people: [
      {name: 'Max', age: 28},
      {name: 'Manu', age: 29},
      {name: 'Stephanie', age: 26}
    ]
  };

  switchNameHandler = (newName) => {
    // DON'T DO THIS: this.state.people[0].name = 'Maximilian';
    this.setState({people: [
        {name: newName, age: 28},
        {name: 'Manu', age: 29},
        {name: 'Stephanie', age: 27}
      ]
    });
  }

  nameChangedHandler = (event) => {
    this.setState({people: [
      {name: 'Max', age: 28},
      {name: event.target.value, age: 29},
      {name: 'Stephanie', age: 26}
    ]
  });
  }

  render() {
    return (
      <div className="App">
        <h1>Hi! I'm a react app!</h1>
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Maximilian!')}>Switch Name</button>
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
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
