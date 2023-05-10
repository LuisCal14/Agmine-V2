import { Outlet, Link} from "react-router-dom";
import React, { useState } from 'react';
import Question from '../components/question/Question';
import Answer from '../components/answer/Answer';
import JoinBosch from "../container/JoinScreen/JoinBosch"
import '../styles/QuizMain.css';

export const QuizBosch = () => {
    const [joinShown, setJoinShown] = useState(false);
    const [state, setState] = useState({
        questions: {
            1: 'Quien precedió el gobierno de Bosch?',
            2: 'Cuando fue juramentado Juan Bosch en 1963?',
            3: 'Cuanto duró la presidencia de Juan Bosch?',
            4: 'Juan Bosch fue el primer presidente elegido 100% democráticamente después de Trujillo',
            5: 'El gobierno de Bosch eta apoyado por la oligarquía',
            6: 'Bosch era considerado comunista',
            7: 'Bosch fue derrocado por',
            8: 'El gobierno de Bosch fue…',
            9: 'Que tipo de gobierno se instauró tras el gobierno de Bosch?'
        },
        answers: {
            1: {
                1: 'Trujillo',
                2: 'Ramfis',
                3: 'Balaguer',
                4: 'Horacio Vázquez'
            },
            2: {
                1: '27 de Febrero',
                2: '16 de Agosto',
                3: '21 de Enero',
                4: '9 de Marzo'
            },
            3: {
                1: '2 años',
                2: '1 año ',
                3: '7 meses',
                4: '4 años'
            },
            4: {
                1: 'Verdadero',
                2: 'Falso'
            },
            5: {
                1: 'Verdadero',
                2: 'Falso'
            },
            6: {
                1: 'Verdadero',
                2: 'Falso'
            },
            7: {
                1: 'USA',
                2: 'Las fuerzas armadas',
                3: 'Balaguer',
                4: 'La oligarquía'
            },
            8: {
                1: 'Democrático',
                2: 'Oligárquico',
                3: 'Tiránico',
                4: 'Comunista'
            },
            9: {
                1: 'Tirania',
                2: 'Triunvirato',
                3: 'Gobierno democrático',
                4: 'Senado'
            }
        },
        correctAnswers: {
            1: '3',
            2: '1',
            3: '3',
            4: '1',
            5: '2',
            6: '1',
            7: '2',
            8: '1',
            9: '2'
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
                <JoinBosch onClick={() => setJoinShown(true)} start={()=>setJoinShown(true)}/>
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
                                <Link to="/quizmenu" style={{paddingTop: "5rem", color:"var(--color-green)"}}>Volver al menu</Link>                            </div>
                        )
                    }
                </div>
            )}
            <Outlet />
        </>
    );
};

export default QuizBosch;
