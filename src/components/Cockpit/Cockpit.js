import React, { useEffect, useRef } from 'react'

import AuthContext from '../context/auth-context'

const Cockpit = (props) => {   
    
    const toggleBtnRef = useRef();

    useEffect( ()=>{    
        console.log("Cockpit.js useEffect calling");
         setTimeout(() => {
            console.log("Cockpit In timeout")
        }, 1000);
        toggleBtnRef.current.click();
        return ()=>{
            //clearTimeout(timer);
            console.log("Cockpit.js cleaning up code")
        }
    },[])

    useEffect( ()=>{    
        console.log("Cockpit.js 2 useEffect calling");
        return ()=>{console.log("Cockpit.js 2 cleaning up code")}
    })

    return (
        <div>
            <h1>My heading</h1>
            <button style={props.styled} ref={toggleBtnRef} onClick={props.clicked}>Person Toggle</button>
            <AuthContext.Consumer>
              {(context) =>  <button onClick={context.login}>Login</button>}
            </AuthContext.Consumer>
        </div>
        )
}

export default React.memo (Cockpit)