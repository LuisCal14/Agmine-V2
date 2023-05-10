import { Outlet } from "react-router-dom";
import React, { useState } from 'react';
import Question from '../components/question/Question';
import Answer from '../components/answer/Answer';
import JoinTrujillo from "../container/JoinScreen/JoinTrujillo"
import '../styles/QuizMain.css';

export const QuizMain = () => {
    const [joinShown, setJoinShown] = useState(false);
    const [state, setState] = useState({
        questions: {
            1: 'El partido formado por Trujillo se llamó….?',
            2: 'Trujillo fue juramentado como presidente en:',
            3: 'Trujillo suplantó a:',
            4: 'Horacio Vasquez fue derrocado por Trujillo?',
            5: 'En la era de Trujillo RD estaba divida en ….. provincias?',
            6: 'Trujillo ganó las elecciones de 1942 con casi el 100% de los votos',
            7: 'El banco central fue creado en el gobierno de Trujillo',
            8: 'Primera expedición contra Trujillo',
            9: 'Quien no fue uno de los complots dores contra Trujillo?',
            10: 'Cuando fue asesinado Trujillo? '
        },
        answers: {
            1: {
                1: 'Partido dominicano',
                2: 'Partido de la liberación Dominicana',
                3: 'PRSC'
            },
            2: {
                1: '1940',
                2: '1916',
                3: '1930',
                4: '1924'
            },
            3: {
                1: 'Horacio Vásquez',
                2: 'Juan Bosch',
                3: 'Balaguer',
                4: 'Estrella Ureña '
            },
            4: {
                1: 'Verdadero',
                2: 'falso'
            },
            5: {
                1: '32',
                2: '12',
                3: '14',
                4: '20'
            },
            6: {
                1: 'Verdadero',
                2: 'falso'
            },
            7: {
                1: 'Verdadero',
                2: 'falso'
            },
            8: {
                1: '14 de Julio (1J4)',
                2: 'Los palmeros',
                3: 'Cayo confites'
            },
            9: {
                1: 'Imbert Barreras ',
                2: 'Antonio de la Masa',
                3: 'Roberto Pastoriza',
                4: 'Amin Abel Hasbun'
            },
            10: {
                1: '1961',
                2: '1946',
                3: '1952',
                4: '1973'
            }
        },
        correctAnswers: {
            1: '1',
            2: '3',
            3: '1',
            4: '1',
            5: '2',
            6: '2',
            7: '1',
            8: '3',
            9: '4',
            10: '1'
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
                <JoinTrujillo onClick={() => setJoinShown(true)} start={()=>setJoinShown(true)}/>
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
                            </div>
                        )
                    }
                </div>
            )}
            <Outlet />
        </>
    );
};

export default QuizMain;
