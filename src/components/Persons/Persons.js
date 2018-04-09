import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component {

    constructor(props) {
        super(props);
        console.log('[Persons.js] Inside Constructor', {props});
        this.state = {people: [
          {id: 'asdf1', name: 'Max', age: 28},
          {id: 'qwer12', name: 'Manu', age: 29},
          {id: 'zxcv354', name: 'Stephanie', age: 26}
        ],
        showPeople: false};
    }

    componentWillMount() {
    console.log('[Persons.js] inside componentWillMount()');
    }

    componentDidMount() {
    console.log('[Persons.js] inside componentDidMount()');
    }

    render() {
        console.log('[Persons.js] inside render()');
        return this.props.persons.map((person, index) => {
            return <Person 
                click={() => this.props.clicked(index)}
                name={person.name}
                age={person.age}
                key={person.id}
                changed={(event) => this.props.changed(event, person.id)} />
        });
    }
}

export default Persons;