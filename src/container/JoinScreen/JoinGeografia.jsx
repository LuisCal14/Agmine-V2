import React from "react";
import './JoinScreen.css'

function JoinGeografia({start}){
    return (
        <div className="join-Screen">
            <h2>Geografia</h2>
            <button onClick={start}>COMENCEMOS</button>
        </div>
    )
}

export default JoinGeografia;
