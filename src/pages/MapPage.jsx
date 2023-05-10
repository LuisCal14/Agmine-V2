import React, { useState } from "react";
import Provinces from "../components/Maps/Provinces";
import Nav from "../components/Navbar/Navbar";



const Map = () => {

    const [nombreArea, setNombreArea] = useState(null);

    const handlePathClick = (nombre) => {
            setNombreArea(nombre);
    }

    return (
        <div style={{display: "flex", justifyContent: "center", alignContent:"center", flexDirection:"column", backgroundColor:"black"}}>
            <p style={{color: "var(--color-white)", textAlign:"center", marginTop:"4rem"}}>{nombreArea}</p>
            <Provinces onPathClick={handlePathClick} />
        </div>
    )
}
      
export default Map;