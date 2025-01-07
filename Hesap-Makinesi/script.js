const display = document.querySelector('.calculator-input');
const keys = document.querySelector('.calculator-keys');

let displayValue = '0';
let firstValue = null;
let operator = null;
let waitingFordisplayValueSecond = false;

updateDisplay();

function formatNumber(num) {
    let strNum = num.toString();// Burada sayıyı string değer olarak kaydetmiş oluruz.
    let formatted = ''; // 
    let count = 0;

    if (strNum.includes('.')) {
        return strNum; // Nokta varsa, orijinal değeri döndür
    }

    for (let i = strNum.length - 1; i >= 0; i--) { // Burada tersine döngü oluşturmuş oluruz.
        formatted = strNum[i] + formatted; 
        count++;

        if (count % 3 === 0 && i !== 0) {
            formatted = '.' + formatted;
        }
    }

    return formatted;
}

function updateDisplay() {
    display.value = formatNumber(displayValue);
}

document.addEventListener('keydown', function(event) {
    const key = event.key;

    // Sayı tuşlarına basıldığında ekranı güncelle
    if (!isNaN(key) && key !== ' ') {
        inputNumber(key);  // Burada inputNumber'ı çağırıyoruz
        updateDisplay();
        return;
    }
    
    // Eğer 'Backspace' tuşuna basıldığında son karakteri sil
    if (key === 'Backspace') {
        deleted();
        updateDisplay();
        return;
    }

    if(key === 'Enter') {
        handleOperator();
        updateDisplay();
        waitingFordisplayValueSecond = true;
        return;
    }

    if(key === '.') {
        inputDecimal();
        updateDisplay();
        return;
    }


    // Diğer tuşlar için buraya kod eklenebilir (örneğin +, -, *, / gibi)
});

keys.addEventListener('click', function (e) {
    const element = e.target;

    if (!element.matches('button')) return;

    if (element.classList.contains('operator')) {
        // console.log('operator', element.value);
        handleOperator(element.value);
        updateDisplay();
        return;
    }

    if (element.classList.contains('decimal')) {
        inputDecimal();
        updateDisplay();
        return;
    }

    if (element.classList.contains('clear')) {
        clear();
        updateDisplay();
        return;
    }

    if (element.classList.contains('delete')) {
        deleted();
        updateDisplay();
        return;
    }

    inputNumber(element.value);
    updateDisplay();
});

function handleOperator(nextOperator) {
    const value = parseFloat(displayValue);

    if (operator && waitingFordisplayValueSecond) {
        operator = nextOperator;
        return;
    }

    if (firstValue === null) {
        firstValue = value;
    } else if (operator) {
        const result = calculate(firstValue, `${operator}`, value);

        displayValue = `${parseFloat(result.toFixed(7))}`;
        firstValue = result;
    } else if (waitingFordisplayValueSecond) {
        secondValue = result;
    }

    waitingFordisplayValueSecond = true;
    operator = nextOperator;


    console.log(displayValue, operator, firstValue, waitingFordisplayValueSecond);
}

function calculate(first, operator, second) {
    if (operator === '+') {
        return (first) + (second);
    } else if (operator === '-') {
        return first - second;
    } else if (operator === '*') {
        return first * second
    } else if (operator === '/') {
        return first / second;
    }
    return second;
}

function inputNumber(num) {
    if (waitingFordisplayValueSecond) {
        displayValue = num;
        waitingFordisplayValueSecond = false;
    } else {
        displayValue = displayValue === '0' ? num : displayValue + num;
    }

    console.log(displayValue, firstValue, operator, waitingFordisplayValueSecond);
}

function inputDecimal() {
    if (!displayValue.includes('.')) {
        displayValue += '.';
    }
}

function clear() {
    displayValue = '0';

    waitingFordisplayValueSecond = false;
    operator = null;
    firstValue = null;
}

function deleted() {
    if (displayValue === '') {
        displayValue = '0';
    } else if (displayValue === '0') { // Burada '===' kullanmalısın
        return displayValue; // '0' ise hiçbir şey yapma
    } else {
        displayValue = displayValue.slice(0, -1); // Son karakteri sil
    }
    updateDisplay(); // Ekranı güncelle
}