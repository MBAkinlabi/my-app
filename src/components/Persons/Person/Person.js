import React, { Component } from 'react';
import propTypes from 'prop-types';

import Aux from '../../../hoc/Aux';
import withClass from '../../../hoc/withClass';
import classes from'./Person.css';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    constructor(props) {
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount() {
        // This is the first way
        // this.inputElement.focus();

        // Note that .current is selecting the current element.
        this.inputElementRef.current.focus();
    }

    render() {
        console.log('[Person.js] rendering...');
        return(
            <Aux>
                <AuthContext.Consumer>
                    {(context) => 
                        context.authenticated ? <p>Authenticated</p> : <p>Please log in</p> 
                    }
                </AuthContext.Consumer>
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <p key="i2" >{this.props.children}</p>
                <input 
                    key="i3" 
                    // This is the first way
                    // ref={(inputEl) => {this.inputElement = inputEl}}

                    ref={this.inputElementRef}
                    type="text" 
                    onChange={this.props.changed} 
                    value={this.props.name} 
                />
            </Aux>
        );
    }
}

Person.propTypes = {
    click: propTypes.func,
    name: propTypes.string,
    age: propTypes.number,
    changed: propTypes.func
};

export default withClass(Person, classes.Person);