import React from 'react'

const Cockpit = (props) => {    
    return (
        <div>
            <h1>My heading</h1>
            <button style={props.styled} onClick={props.clicked}>Person Toggle</button>
        </div>
        )
}

export default Cockpit