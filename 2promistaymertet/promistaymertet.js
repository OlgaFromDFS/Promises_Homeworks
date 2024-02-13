const form = document.querySelector('.form');
const input = document.querySelector('.input-text');
const massage = document.querySelector('.statistics');
const resultMin = document.querySelector('.result-min');
const resultMax = document.querySelector('.result-max');
const resultMean = document.querySelector('.result-mean');

function getMinNumber(numbers) {
    const minNumber = Math.min(...numbers);

    return minNumber;
}

function getMaxNumber(numbers) {
    const maxNumber = Math.max(...numbers);

    return maxNumber;
}

function getTheArithmeticMean(numbers) {
    const numbersSum = numbers.reduce((sum, currentNumber) => sum + currentNumber, 0);
    const theArithmeticMean = numbersSum / numbers.length;

    return theArithmeticMean;
}

function getNumbers() {
    let generatedNumbers = [];

    if (input.value) {
        for (let i = 0; i < Number(input.value); i++) {
            const promise = new Promise(function(resolve) {
                setTimeout(function() {
                    const number = Math.floor(Math.random() * 100);

                    resolve(number);
                }, Math.floor(Math.random()));
            });

            generatedNumbers.push(promise);
        }
    } else {
        massage.textContent = 'Вы ничего не ввели.';
    }
    
    return Promise.all(generatedNumbers);
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    getNumbers()
        .then(numbers => {
            resultMin.textContent = `Минимальное число — ${getMinNumber(numbers)}.`;
            resultMax.textContent = `Максимальное число — ${getMaxNumber(numbers)}.`;
            resultMean.textContent = `Среднее арифметическое число — ${getTheArithmeticMean(numbers)}.`;
        })
});
