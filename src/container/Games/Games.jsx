import './Games.css'
import { Link } from 'react-router-dom'
import map from '../../assets/images/RD.svg'
import quiz from '../../assets/images/quiz.png'

function Games() {
    return (
        <div className='games'>
            <div className='games-container'>
                <h1 className='games-h1'>seleccione el modo:</h1>
                
                <div className='games__options-container'>
                    
                    <div className='games-option'>
                        <img src={map} alt="maps"/>
                        <Link to="/mapmenu">
                            <button type='button' className='custom__buttonR'>Entrar</button>
                        </Link>
                    </div>
                    
                    <div className='games-option'>
                        <img src={quiz} alt="quiz" />
                        <Link to="/quizmenu">
                            <button type='button' className='custom__buttonR'>Entrar</button>
                        </Link>
                    </div>
                
                </div>
                
                <Link to="/">Volver al inicio</Link>
            </div>
        </div>
    )
} 

export default Games