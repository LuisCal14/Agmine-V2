import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react';
import Question from '../components/question/Question';
import Answer from '../components/answer/Answer';
import JoinGeografia from "../container/JoinScreen/JoinGeografia"
import '../styles/QuizMain.css';

export const QuizGeografia = () => {
    const [joinShown, setJoinShown] = useState(false);
    const [state, setState] = useState({
        questions: {
            1: ' Conjunto de todas las entidades fisicas detectables que interactuan entre ellas dentro de un espacio tiempo dentro de un las leyes fisicas y matematicas.',
            2: 'Conjunto de estrellas, nubes, planetas, polvo interestelar unidos gravitatoriamente.',
            3: 'Los tipos de galaxia son irregular, espiral, lenticular y espiral barrada',
            4: 'En que galaxia se encuentra nuestro sistema solar?',
            5: 'La tierra es el centro del universo y no se mueve, se mantiene estatica.',
            6: 'Es considerado como el padre de la historia antigua',
            7: 'Dio con el diametro de la tierra y la distancia del sol',
            8: 'No es considerado como geografo. Pero es mas considerado como el padre de la historia planetaria',
            9: 'Padre de la historia dominicana',
            10: 'Es el tercer planeta con respecto al sol, pertenece a los planetas rocosos y su superficie es un 70% agua.',
            11: 'Las esferas de la tierra son: Atmosfera, antroposfera, litosfera o geosfera, biosfera, hidrosfera.'
        },
        answers: {
            1: {
                1: 'Universo',
                2: 'Galaxia',
                3: 'Sistema Solar',
                4: 'Teoria heliocentrica'
            },
            2: {
                1: 'Galaxia',
                2: 'Planetas',
                3: 'Espacio',
                4: 'Estrellas'
            },
            3: {
                1: 'Verdadero',
                2: 'Falso'
            },
            4: {
                1: 'Enana de la Osa Menor',
                2: 'Andromeda',
                3: 'Via Lactea',
                4: 'Enana de Sextans'
            },
            5: {
                1: 'Teoria Geocentrica',
                2: 'Teoria heliocentrica'
            },
            6: {
                1: 'Hecateo',
                2: 'Homero',
                3: 'Herodoto',
                4: 'Erastostenes'
            },
            7: {
                1: 'Hecateo',
                2: 'Homero',
                3: 'Herodoto',
                4: 'Erastostenes'
            },
            8: {
                1: 'Hecateo',
                2: 'Homero',
                3: 'Herodoto',
                4: 'Erastostenes'
            },
            9: {
                1: 'Manuel del Cabral',
                2: 'Jose Gabriel Garcia',
                3: 'Mause Dom',
                4: 'Franklin Guitierrez'
            },
            10: {
                1: 'Planeta Tierra',
                2: 'Marte',
                3: 'Mercurio',
                4: 'Saturno'
            },
            11: {
                1: 'Verdadero',
                2: 'Falso'
            }
        },
        correctAnswers: {
            1: '1',
            2: '1',
            3: '1',
            4: '3',
            5: '1',
            6: '2',
            7: '4',
            8: '3',
            9: '2',
            10: '1',
            11: '1'
        },
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    });

    const checkAnswer = answer => {
        const { correctAnswers, step, score } = state;
        if(answer === correctAnswers[step]){
            setState(prevState => ({
                ...prevState,
                score: score + 1,
                correctAnswer: correctAnswers[step],
                clickedAnswer: answer
            }));
        } else {
            setState(prevState => ({
                ...prevState,
                correctAnswer: 0,
                clickedAnswer: answer
            }));
        }
    }
    const nextStep = () => {
        setState(prevState => ({
            ...prevState,
            step: prevState.step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        }));
    }

    function uploadpage() {
        window.location.reload(false);
    }

    const { questions, answers, correctAnswer, clickedAnswer, step, score } = state;


    return (
        <>
            {!joinShown && (
                <JoinGeografia onClick={() => setJoinShown(true)} start={()=>setJoinShown(true)}/>
            )}
            {joinShown && (
                <div className="Content">
                    {step <= Object.keys(questions).length ? 
                        (<>
                            <Question
                                question={questions[step]}
                            />
                            <Answer
                                answer={answers[step]}
                                step={step}
                                checkAnswer={checkAnswer}
                                correctAnswer={correctAnswer}
                                clickedAnswer={clickedAnswer}
                            />
                            <button
                                className="NextStep"
                                disabled={
                                    clickedAnswer && Object.keys(questions).length >= step
                                    ? false : true
                                }
                                onClick={() => nextStep()}>Next</button>
                        </>) : (
                            <div className="finalPage">
                                <p>RESULTADOS: <span>{score} de {Object.keys(questions).length} PREGUNTAS</span></p>
                                <button onClick={() => {uploadpage();}}>Reintentar</button>
                                <Link to="/quizmenu" style={{paddingTop: "5rem", color:"var(--color-green)"}}>Volver al menu</Link>                            
                            </div>
                        )
                    }
                </div>
            )}
            <Outlet />
        </>
    );
};

export default QuizGeografia;
