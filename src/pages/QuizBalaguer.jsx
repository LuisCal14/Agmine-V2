import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react';
import Question from '../components/question/Question';
import Answer from '../components/answer/Answer';
import JoinBalaguer from "../container/JoinScreen/JoinBalaguer"
import '../styles/QuizMain.css';

export const QuizBalaguer = () => {
    const [joinShown, setJoinShown] = useState(false);
    const [state, setState] = useState({
        questions: {
            1: 'Los periodos de Balaguer duraron:',
            2: 'El gobierno de Balaguer fue caracterizado por:',
            3: 'El gobierno de Balaguer quería aparentar….',
            4: 'Quien no gobernó entre los periodos de Balaguer',
            5: 'Balaguer se mantuvo fiel a Trujillo tras su muerte',
            6: 'Cual de los siguientes presidentes tuvo una relación conflictiva con la UASD?',
            7: 'Quien no fue asesinado por Balaguer ?',
            8: 'Balaguer impulsó el desarrollo del turismo?',
            9: 'Cual de estas obras no fue creada por Balaguer?'
        },
        answers: {
            1: {
                1: '10 años y 12 años',
                2: '20 años y 2 años',
                3: '13 años y 5 años'
            },
            2: {
                1: 'Corrupcion',
                2: 'Crueldad',
                3: 'Democracia',
                4: 'Prosperidad económica'
            },
            3: {
                1: 'Democracia',
                2: 'Prosperidad economía',
                3: 'Rudeza',
                4: 'Transparencia'
            },
            4: {
                1: 'Juan Bosch ',
                2: 'Jorge Blanco',
                3: 'Horacio Vázquez',
                4: 'Antonio Guzmán '
            },
            5: {
                1: 'Verdadero',
                2: 'Falso'
            },
            6: {
                1: 'Trujillo',
                2: 'Balaguer',
                3: 'Juan Bosch'
            },
            7: {
                1: 'Amin Abel',
                2: 'Camaño de ño',
                3: 'Hermanas mirabal',
                4: 'Otto Morales'
            },
            8: {
                1: 'Verdadero',
                2: 'Falso'
            },
            9: {
                1: 'Monumento Santiago',
                2: 'Acuario nacional',
                3: 'Faro a Colón'
            }
        },
        correctAnswers: {
            1: '1',
            2: '2',
            3: '1',
            4: '3',
            5: '2',
            6: '2',
            7: '3',
            8: '2',
            9: '1'
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
                <JoinBalaguer onClick={() => setJoinShown(true)} start={()=>setJoinShown(true)}/>
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

export default QuizBalaguer;
