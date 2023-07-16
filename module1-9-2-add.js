const arrayOfMathSigns = [">", "<", "=", "+", "-", "*", "/"];

const getMathResult = (expression) => {
    if (expression.length > 3) {
        expression.splice(1, expression.length - 3);
        console.log(expression);
        
    };
    
    const num1 = expression[0];
    const num2 = expression[2];
    const mathSign = expression[1];

    if (expression.length < 3) {
        return `Ошибка! Выражение слишком короткое`;
    };

    let chekingArray = [];

    arrayOfMathSigns.forEach(sign => {
        if (mathSign === sign) {
            chekingArray.push(sign);
        };
    });

    if (chekingArray.length === 0) {
        return `Ошибка! Неверный математический знак`;
    };

    if (!Number(num1, num2)) {
        return `Ошибка! Первый и последний элемент массива должен быть числом или строкой с числом`;
    };

    if (mathSign === ">") {
        return num1 > num2;
    };

    if (mathSign === "<") {
        return num1 < num2;
    };

    if (mathSign === "=") {
        return num1 = num2;
    };

    if (mathSign === "+") {
        return num1 + num2;
    };

    if (mathSign === "-") {
        return num1 - num2;
    };

    if (mathSign === "*") {
        return num1 * num2;
    };

    if (mathSign === "/") {
        return num1 / num2;
    };
};

console.log(getMathResult(['100', 'hello', 'javascript', 'help200', '+', 4]));