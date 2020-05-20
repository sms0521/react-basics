import React, { Component } from 'react'
import PropsType from 'prop-types'

import './Person.css'
import Aux from '../../hoc/Auxiliary';
import AuthContext from '../../context/auth-context'

import WithClass from '../../hoc/WithClass';

class Person extends Component {

    constructor(){
        super();
        this.inputElementRef = React.createRef();
    }

    componentDidMount(){
        //this.refElement.focus();
        this.inputElementRef.current.focus();
    }

    render(){
        console.log(" render person.js");
        return (
            
            <WithClass classes="Person">
                <AuthContext.Consumer>
                    {(context)=>context.authenticated ? <p>Logged In</p> : null}
                </AuthContext.Consumer>
                <p onClick={this.props.click}>I'm {this.props.name} and my age is {this.props.age}</p>
                <p>{this.props.childern}</p>
                <input 
                    type="text" 
                    onChange={this.props.changeName}
                   // ref={(refEle)=> this.refElement =  refEle} 
                    ref= {this.inputElementRef}
                    value={this.props.name}/>
            </WithClass>
            
        );
    }
};

Person.propTypes ={
    click: PropsType.func,
    name: PropsType.string,
    age: PropsType.number,
    changeName: PropsType.func
}

export default Person;