import React, { Component, useState } from 'react';
import './App.css';
import Person1 from './Person/person';

const app = (props) => {

    const [personState, setPersonState] = useState(
      { persoms: [
          {name:'mani', age:28},
          {name:'bhaskar', age:28},
          {name:'chakri', age:28},
        ],
        anotherPerson:"test"});
        
        const [otherState, setOtherState] = useState("hello");
        console.log(personState , otherState)
       const switchNameHandler =  () =>{
          console.log("working");
          console.log(this);
        
          setPersonState({
            persoms: [
              {name:'manishankar', age:28},
              {name:'bhaskar', age:28},
              {name:'chakri', age:28},
            ]
          })
        }
        
        const switchNameHandler1 =  function test(params) {
          console.log(this);
        }
    
   
    return (
      <div className="App">
        <h1>My heading</h1>
        <button onClick={switchNameHandler}>Switch Name</button>
        <button onClick={ switchNameHandler1.bind(this)}>Switch Name2</button>
        <Person1 name={personState.persoms[0].name} age={personState.persoms[0].age}></Person1>
        <Person1 name={personState.persoms[1].name} age={personState.persoms[1].age}></Person1>
        <Person1 name={personState.persoms[2].name} age={personState.persoms[2].age}></Person1>
      </div>
    );
    //return React.createElement('div',{className:"App"}, React.createElement('h1',null,'It\'s working'))

}

export default app;