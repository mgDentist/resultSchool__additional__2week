const text = 'Привет! Как дела! Давно мы с тобой не виделись.';

const showSuccessMessage = (message) => {
    console.log(message);
};

const showErrorMessage = (message) => {
    console.error(message)
};

const checkTextOnErrorSymbol = (text, errorSymbol, showSuccessMessage, showErrorMessage) => {
    let array = [];

    for (let i = 0; i <= text.length - 1; i++) {
        if (text[i] === errorSymbol) {
            showErrorMessage(`Найден запрещенный символ "${errorSymbol}" под индексом ${i}`);
            array.push(i);
        };
    };

    if (array.length === 0) {
        showSuccessMessage(`В данном тексте нет запрещенных символов`);
    };
};

checkTextOnErrorSymbol(text, 'а', showSuccessMessage, showErrorMessage);