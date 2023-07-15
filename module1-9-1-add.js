const goals = [8, 1, 1, 3, 2, -1, 5];

//Самый результативный матч по количеству голов.
const bestMatch = () => {
    let copiedArray = [...goals];
    let sortedArray = copiedArray.sort((a, b) => {
        return b - a;
    });
    let mostOfGoals = sortedArray.at(0);

    let theBestMatch = goals.indexOf(mostOfGoals);
    alert(`Самый результативный матч был под номером ${theBestMatch + 1}. В нем было забито ${mostOfGoals} гол(ов)`)
};

bestMatch();

//Самые не результативные игры.
const worseMatch = () => {
    let copiedArray = [...goals];
    let sortedArray = copiedArray.sort((a, b) => {
        return a - b;
    });
    let filtredArray = sortedArray.filter((goal) => {
        return goal >= 0;
    });

    let worseAmmountOfGoals = filtredArray.at(0);
    // console.log(worseAmmountOfGoals);

    const mostUnresultMatches = goals.reduce((acc, currentElemetOfArray, index) => {
        if (currentElemetOfArray === worseAmmountOfGoals) {
            acc.push(index);
        };
        return acc;
    }, []);
    // console.log(mostUnresultMatches);
    let listOfWorseMatches = mostUnresultMatches.join(', ');

    alert(`Самые нерезультативные матчи были под номерами ${listOfWorseMatches}. В каждом из них было забито по ${worseAmmountOfGoals} мячу(а)`);
};

worseMatch();

//Общее количество голов за сезон.
const seasonAmoutOfGoals = () => {
    const sumOfGoals = goals.reduce((acc, currentElement) => {
        if (currentElement >= 0) {
            acc += currentElement;
        };
        return acc;
    }, 0);
    
    alert(`Общее количество голов за сезон равно ${sumOfGoals}`);
};

seasonAmoutOfGoals();

//Были ли автоматические поражения
const isAutomaticDefeat = () => {
    const failure = goals.reduce((acc, currentElement) => {
        if (currentElement < 0) {
            acc.push(currentElement);
        }
        return acc;
    }, []);

    if (failure.length > 0) {
        alert(`Были автоматические поражения: да`);
    } else {
        alert(`Были автоматические поражения: нет`);
    };
};

isAutomaticDefeat();

//Среднее количество голов за матч
const midOfGoalsPerMatch = () => {
    const sortedArray = goals.filter((goal) => {
        return goal >= 0;
    });
    // console.log(sortedArray)

    let sum = sortedArray.reduce((acc, currentElement) => {
        acc += currentElement;
        return acc;
    }, 0);

    alert(`Среднее количество голов за матч равно ${ (sum / sortedArray.length).toFixed(2) }`);
};

midOfGoalsPerMatch()

//Отсортируйте голы в порядке возрастания 
const fromLowToHigh = () => {
    const filtredArray = goals.filter((goal) => {
        return goal >= 0;
    });
    const sortedArray = filtredArray.sort((a, b) => {
        return a - b ;
    });
    const listOfMinMaxGoals = sortedArray.join(', ');

    alert(`голы в порядке возрастания: ${listOfMinMaxGoals}`);
};

fromLowToHigh();
