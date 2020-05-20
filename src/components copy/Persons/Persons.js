import React from 'react';

import Person from '../Persons/Person/person'

const Persons = (props) => {
    console.log(" render persons.js");
    return props.persons.map( (person, index) => 
           <Person
              key={person.id}
              name={person.name}
              age={person.age}
              click={(event) =>{ console.log(event); props.clicked(index)}}
              changeName = {(event) => props.changed(event, person.id)}
            />  
        )
}

export default Persons;