import React, { useState } from 'react';

export default function App() {
    const questions = [
        {
            questionText: 'W którym roku odbył się zjazd gnieźnieński?',
            answerOptions: [
                { answerText: '1025', isCorrect: false },
                { answerText: '1232', isCorrect: false },
                { answerText: '1000', isCorrect: true },
                { answerText: '1137', isCorrect: false },
            ],
        },
        {
            questionText: 'Kto był pierwszym królem Polski?',
            answerOptions: [
                { answerText: 'Mieszko I', isCorrect: false },
                { answerText: 'Bolesław Chrobry', isCorrect: true },
                { answerText: 'Mieszko Stary', isCorrect: false },
                { answerText: 'Kazimierz Odnowiciel', isCorrect: false },
            ],
        },
        {
            questionText: 'Które miasto było pierwszą stolicą Polski?',
            answerOptions: [
                { answerText: 'Gniezno', isCorrect: true },
                { answerText: 'Poznań', isCorrect: false },
                { answerText: 'Kraków', isCorrect: false },
                { answerText: 'Warszawa', isCorrect: false },
            ],
        },
        {
            questionText: 'W którym roku miała miejsce bitwa pod Grunwaldem?',
            answerOptions: [
                { answerText: '1585', isCorrect: false },
                { answerText: '1360', isCorrect: false },
                { answerText: '1242', isCorrect: false },
                { answerText: '1410', isCorrect: true },
            ],
        },
        {
            questionText: 'Który król Polski przyjął hołd pruski?',
            answerOptions: [
                { answerText: 'Władysław Jagiełło', isCorrect: false },
                { answerText: 'Zygmunt I Stary', isCorrect: true },
                { answerText: 'Kazimierz III Wielki', isCorrect: false },
                { answerText: 'Aleksander Jagiellończyk', isCorrect: false },
            ],
        },
        {
            questionText: 'W którym roku wybuchło powstanie Chmielnickiego?',
            answerOptions: [
                { answerText: '1572', isCorrect: false },
                { answerText: '1648', isCorrect: true },
                { answerText: '1655', isCorrect: false },
                { answerText: '1683', isCorrect: false },
            ],
        },
        {
            questionText: 'Który król Polski pobił Turków pod Wiedniem?',
            answerOptions: [
                { answerText: 'Jan Kazimierz', isCorrect: false },
                { answerText: 'Jan III Sobieski', isCorrect: true },
                { answerText: 'Zygmunt August', isCorrect: false },
                { answerText: 'Michał Korybut Wiśniowiecki', isCorrect: false },
            ],
        },
        {
            questionText: 'W którym roku miała miejsce bitwa ze Szwedami pod Kircholmem?',
            answerOptions: [
                { answerText: '1455', isCorrect: false },
                { answerText: '1610', isCorrect: true },
                { answerText: '1745', isCorrect: false },
                { answerText: '1570', isCorrect: false },
            ],
        },
        {
            questionText: 'Który król rządził Polską najdłużej?',
            answerOptions: [
                { answerText: 'Kazimierz Wielki', isCorrect: false },
                { answerText: 'Władysław Jagiełło', isCorrect: false },
                { answerText: 'Zygmunt III Waza', isCorrect: true },
                { answerText: 'Bolesław Chrobry', isCorrect: false },
            ],
        },
        {
            questionText: 'Kto podzielił Polskę na dzielnice?',
            answerOptions: [
                { answerText: 'Stefan Batory', isCorrect: false },
                { answerText: 'Władysław Warneńczyk', isCorrect: false },
                { answerText: 'Mieszko Stary', isCorrect: false },
                { answerText: 'Bolesław Krzywousty', isCorrect: true },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div className='App'>
            {showScore ? (
                <div className='Score-section'>
                    Odpowiedziałeś dobrze na {score} z {questions.length} pytań.
                    Gratulacje!!!
                    <button onClick={() => window.location.reload()}>
                        Zagraj jeszcze raz
                    </button>
                </div>
            ) : (
                <>
                    <div className='Question-section'>
                        <div className='Question-count'>
                            <span>Pytanie {currentQuestion + 1}</span>/{questions.length}
                        </div>
                        <div className='Question-text'>{questions[currentQuestion].questionText}</div>
                    </div>
                    <div className='Answer-section'>
                        {questions[currentQuestion].answerOptions.map((answerOption) => (
                            <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}