import {useState} from 'react';
import {Link} from  'react-router-dom'
import RegionesNorte from '../../components/Maps/RegionesMacroRegionNorte.jsx'

const RegionN = () => {

    const [nombreArea, setNombreArea] = useState(null);

    const handleClick = (nombre) => {
            setNombreArea(nombre);
    }

    return (
        <div style={{display: "flex", justifyContent: "center", alignContent:"center", flexDirection:"column", backgroundColor:"black", minHeight:"100vh"}}>
            <h1 style={{fontFamily:"var(--font-base)", color: "var(--color-green)", letterSpacing: "0.04em", fontSize:"40px", textAlign:"center", padding:"1rem"}}>Seleccione una región para jugar</h1>
            <p style={{color: "var(--color-white)", textAlign:"center", marginTop:"4rem"}}>{nombreArea}</p>
            <RegionesNorte onClick={handleClick} />
            <Link style={{textAlign: "center", color: "var(--color-green)", padding:"0.5rem", transition:"0.4s ease"}} to="/mapmenu">Volver al menu</Link>
        </div>
    )
}

export default RegionN