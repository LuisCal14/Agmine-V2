import React from 'react'
import province from '../../assets/images/RD.svg'
import RegionEste from '../../assets/images/MacroRegionEste.svg'
import RegionNorte from '../../assets/images/Cibao.svg'
import RegionSur from '../../assets/images/MacroRegionSur.svg'
import {Link} from 'react-router-dom'
import './MapsMenu.css'


function MapsM() {
    return (
        <div className='maps__menu'>
            <div className='maps__menu-container'>
                <h1 className='menu-h1'>seleccione el modo:</h1>
                
                <div className='maps-menu__options-container'>
                    
                    <div className='maps-option'>
                        <img src={province} alt="maps" />
                        <Link to="/provinces">
                            <button type='button' className='custom__buttonR'>Entrar</button>
                        </Link>
                    </div>
                    
                    <div className='maps-option'>
                        <img src={RegionSur} alt="quiz" />
                        <Link to="/regionessur">
                            <button type='button' className='custom__buttonR'>Entrar</button>
                        </Link>
                    </div>
                
                </div>
                <div className='menu__options-container'>
                    
                    <div className='maps-option'>
                        <img src={RegionNorte} alt="maps" />
                        <Link to="/regionescibao">
                            <button type='button' className='custom__buttonR'>Entrar</button>
                        </Link>
                    </div>
                    
                    <div className='maps-option'>
                        <img src={RegionEste} alt="quiz" />
                        <Link to="/regioneseste">
                            <button type='button' className='custom__buttonR'>Entrar</button>
                        </Link>
                    </div>
                
                </div>
                
                <Link className='link' to="/games">Volver al menu</Link>
            </div>
        </div>
    )
} 

export default MapsM