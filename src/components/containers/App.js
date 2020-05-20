import React, { Component } from 'react';

import './App.css';

import Persons from '../Persons/Persons';
import Cockpit from '../Cockpit/Cockpit'

import withClass from '../hoc/withClassFunc'
import Aux from '../hoc/Auxiliary'
import AuthContext from '../context/auth-context'

class App extends Component {

  constructor(props){
    super(props);
    console.log("App.js constructor")
  }

  state = {
    persons: [
    {id:"101", name:'mani', age:28},
    {id:"102", name:'bhaskar', age:28},
    {id:"103", name:'chakri', age:28},
    {id:"104", name:'parvez', age:28}
  ],
    anotherPerson:"test",
    showPersons: false,
    showCockpit: true,
    counter:0,
    authenticated:false
  }

  switchNameHandler =  (newName) =>{
    console.log("working");
    console.log(this);

    this.setState({
      persons: [
        {name:newName, age:28},
        {name:'bhaskar', age:28},
        {name:'chakri', age:28},
      ]
    })
  }

  nameChangeHandler = (event, id)=>{

    let personIndex = this.state.persons.findIndex((p) => {return p.id === id})

    const person = {
      ...this.state.persons[personIndex]
    };
    //const person = Object.assign({}, this.state.persons[personIndex])

    person.name = event.target.value;

    const persons = [...this.state.persons]
    persons[personIndex] = person;

    

    this.setState((prevState, props)=>{
      return {
        persons: persons,
        counter: prevState.counter+1
      }
    })
  }
  
  switchNameHandler1 =  function test(params) {
    console.log(this);
  }

  togglePersonHandler = ()=>{
    this.setState({
      showPersons:!this.state.showPersons
    })
  }

  deletePersonHandler = (index) => {
    let persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState({persons:persons})
  }

  deletePersonHandler1 = function test2(index) {
    console.log(this);
  }

  
  static getDerivedStateFromProps(props, state){
    console.log("getDerivedStateFromPorps App.js");
    return state;
  }

  // componentWillMount(){
  //   console.log(" componentWillMount App.js");
  // }

  componentDidMount(){
    console.log("App.js componentDidMount");
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log("App.js shouldcomponentupdate")
    return true;
  }

  getSnapshotBeforeUpdate(prevProp, prevState){
    console.log("App.js getSnapshotBeforeUpdate ")
    return {name1:"App.js"}
  }
  
  componentDidUpdate(prevProp, prevState, snapShot ){
    console.log("App.js snapshot"+snapShot)
    console.log("App.js componentDidUpdate");
  }

  loginHandler= () => {
    this.setState({authenticated: true})
  }

  

  render() {
    const style = {
      backgroundColor : 'red',
      border: '1px soild blue',
      font:'inherit',
      padding:'8px',
      cursor:'pointer'
    }

    let persons = null;

    if(this.state.showPersons){
      persons =( 
        <Persons 
          persons ={this.state.persons}
          clicked = {this.deletePersonHandler1}
          changed = {this.nameChangeHandler}
        />
      )
    }
    console.log("render App.js");

    return (
      <Aux>
        <button onClick={()=>this.setState({showCockpit: !this.state.showCockpit})}>Cockpit</button>
       <AuthContext.Provider value={{
          authenticated : this.state.authenticated,
          login: this.loginHandler
       }
       }>
        {this.state.showCockpit ? 
          <Cockpit clicked={this.togglePersonHandler} styled={style}></Cockpit>: 
          null}
        
        {persons}
        </AuthContext.Provider>
      </Aux>
    );
    //return React.createElement('div',{className:"App"}, React.createElement('h1',null,'It\'s working'))
  }
}

export default withClass(App, "App");