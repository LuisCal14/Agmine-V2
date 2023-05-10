import React from "react";
import './JoinScreen.css'

function JoinBosch({start}){
    return (
        <div className="join-Screen">
            <h2>Bosch</h2>
            <button onClick={start}>COMENCEMOS</button>
        </div>
    )
}

export default JoinBosch;
