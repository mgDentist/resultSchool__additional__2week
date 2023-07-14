// version 1
// const checkQuestionAnswer = (question, correctAnswer) => {
//     let userAnswer = prompt(question).trim();
//     let normalizeUserAnswer = userAnswer[0].toUpperCase() + userAnswer.slice(1).toLowerCase();
// console.log(normalizeUserAnswer)
//     if (normalizeUserAnswer === correctAnswer) {
//         alert(`Ответ верный`);
//     } else {
//         alert(`Ответ неверный`);
//     };
// };

// checkQuestionAnswer('Арбуз это фрукт или ягода?', 'Ягода');
// checkQuestionAnswer('Сколько в среднем зубов у взрослого человека?', '32');
// checkQuestionAnswer('Как называется самая маленькая птица в мире?', 'Колибри');

//ver 2
const arrayQuestions = [
    `Арбуз это фрукт или ягода?`,
    `Сколько в среднем зубов у взрослого человека?`,
    `Как называется самая маленькая птица в мире?`,
];

const arrayAnswers = [
    `Ягода`,
    `32`,
    `Колибри`,
];

const checkQuestionAnswer = () => {
    arrayQuestions.forEach((question, correctAnswer) => {
        let answer = arrayAnswers[correctAnswer];
        let userAnswer = prompt(question).trim();
        let normalizeAnswer = userAnswer[0].toUpperCase() + userAnswer.slice(1).toLowerCase();
        
        if (normalizeAnswer === answer) {
            alert(`Ответ верный`);
        } else {
            alert(`Ответ неверный`);
        };
    });
};

checkQuestionAnswer();
