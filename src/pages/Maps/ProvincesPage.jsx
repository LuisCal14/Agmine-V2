import React, { useState } from "react";
import Provinces from "../../components/Maps/Provinces";
import {Link} from 'react-router-dom'



const Province = () => {

    const [nombreArea, setNombreArea] = useState(null);

    const handlePathClick = (nombre) => {
            setNombreArea(nombre);
    }

    return (
        <div style={{display: "flex", justifyContent: "center", alignContent:"center", flexDirection:"column", backgroundColor:"black", height:"100vh"}} className="provinces-cont">
            <h1 style={{fontFamily:"var(--font-base)", color: "var(--color-green)", letterSpacing: "0.04em", fontSize:"40px", textAlign:"center", padding:"1rem"}}>Seleccione una provincia para jugar</h1>
            <p style={{color: "var(--color-white)", textAlign:"center"}}>{nombreArea}</p>
            <Provinces onPathClick={handlePathClick} />
            <Link style={{textAlign: "center", color: "var(--color-green)", padding:"0.5rem", transition:"0.4s ease"}} to="/mapmenu">Volver al menu</Link>
        </div>
    )
}
      
export default Province;