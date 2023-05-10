import React from "react";
import './JoinScreen.css'

function JoinInervencion({start}){
    return (
        <div className="join-Screen">
            <h2>1RA Intervencion</h2>
            <button onClick={start}>COMENCEMOS</button>
        </div>
    )
}

export default JoinInervencion;
