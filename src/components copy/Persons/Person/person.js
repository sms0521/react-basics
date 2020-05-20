import React from 'react'

import './Person.css'

const Person = (props) =>{
    console.log(" render person.js");
    return (
        <div className="Person">
            <p onClick={props.click}>I'm {props.name} and my age is {props.age}</p>
            <p>{props.childern}</p>
            <input type="text" onChange={props.changeName}  value={props.name}/>
        </div>
        );
};

export default Person;