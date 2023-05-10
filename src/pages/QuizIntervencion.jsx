import { Outlet, Link } from "react-router-dom";
import React, { useState } from 'react';
import Question from '../components/question/Question';
import Answer from '../components/answer/Answer';
import JoinIntervencion from "../container/JoinScreen/JoinIntervencion"
import '../styles/QuizMain.css';

export const QuizIntervencion = () => {
    const [joinShown, setJoinShown] = useState(false);
    const [state, setState] = useState({
        questions: {
            1: 'Quien era el presidente de la Republica Dominicana cuando se produjo la primera intervencion norteamericana?',
            2: 'En que año se produjo la primera intervencion de los EE.UU al pais?',
            3: 'Cuantos años duro esta ocupacion?',
            4: 'Quien era el presidente de los EE.UU al producirse la primera intervencion Yankee en R.D?',
            5: 'Los gavilleros y los nacionalistas fueron los que hicieron una mayor resistencia contra los ocupantes?'
        },
        answers: {
            1: {
                1: 'Juan Isidro Jimenez',
                2: 'William Caperton',
                3: 'Harry Shepard',
                4: 'Gregorio Urbano Gilbert'
            },
            2: {
                1: '1900 - 1914',
                2: '1930 - 1935',
                3: '1916 - 1924'
            },
            3: {
                1: '10 años',
                2: '3 años',
                3: '7 años',
                4: '8 años'
            },
            4: {
                1: 'Gregorio Urbano Gilbert',
                2: 'Willian Caperton',
                3: 'Harry Shepard',
                4: 'Thomas Woodorw Wilson'
            },
            5: {
                1: 'Verdadero',
                2: 'Falso'
            }
        },
        correctAnswers: {
            1: '1',
            2: '3',
            3: '4',
            4: '4',
            5: '1'
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
                <JoinIntervencion onClick={() => setJoinShown(true)} start={()=>setJoinShown(true)}/>
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
                                onClick={() => nextStep()}>SIGUIENTE</button>
                        </>) : (
                            <div className="finalPage">
                                <p>RESULTADOS: <span>{score} DE {Object.keys(questions).length} PREGUNTAS</span></p>
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

export default QuizIntervencion;
