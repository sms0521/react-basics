import React, { Component } from 'react';

import Person from '../Persons/Person/person'
import withClass from '../hoc/withClassFunc'


class Persons extends Component {

    // static getDerivedStateFromProps(props, state){
    //     console.log("getDerivedStateFromPorps Persons.js");
    //     return state;
    // }

    shouldComponentUpdate(nextProps, nextState){
        console.log("shouldComponentUpdate Persons.js");
        if(nextProps.persons !== this.props.persons){
            return true;
        }else{
            return false;
        }
    }

    getSnapshotBeforeUpdate(prevProp, prevState){
        console.log("getSnapshotBeforeUpdate Persons.js ")
        return {name:"mani"}
    }

    componentDidUpdate(prevProp, prevState, snapShot ){
        console.log("snapShot"+snapShot)
        console.log("componentDidUpdate Persons.js ")
    }

    componentDidMount(){
        console.log("componentDidMount Persons.js ")
    }

    render(){
        console.log(" render persons.js");
        return this.props.persons.map( (person, index) => 
           <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={(event) =>{ console.log(event); this.props.clicked(index)}}
              changeName = {(event) => this.props.changed(event, person.id)}
            />  
        )
    }
}

export default withClass(Persons,"");