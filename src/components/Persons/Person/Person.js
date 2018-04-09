import React, {Component} from 'react';
import classes from './Person.css';

class Person extends Component {

    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor', {props});
        this.state = {people: [
          {id: 'asdf1', name: 'Max', age: 28},
          {id: 'qwer12', name: 'Manu', age: 29},
          {id: 'zxcv354', name: 'Stephanie', age: 26}
        ],
        showPeople: false};
    }

    componentWillMount() {
    console.log('[Person.js] inside componentWillMount()');
    }

    componentDidMount() {
    console.log('[Person.js] inside componentDidMount()');
    }

    render() {
        console.log('[Person.js] inside render()');
        return (
            <div className={classes.Person} >
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        )
    }
}

export default Person;