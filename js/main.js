console.group("Вивести на сторінку в один рядок через кому числа від 10 до 20");

let number = 10;
let result = "";

while (number < 21){
    if (number === 20) {
        result += number;
    } else {
        result+= `${number}, `;
    }

    number++;
}

console.log(result);
console.groupEnd();

console.group("Вивести квадрати чисел від 10 до 20");

let i = 10; 

while (i < 21) {
    console.log(`${i} squared is equal to ${i * i}`);
    i++;
}

console.groupEnd();

console.group("Вивести таблицю множення на 7");

let j = 1; 

while (j < 11) {
    console.log(`${j} * 7 = ${j * 7}`);
    j++;
}

console.groupEnd();

console.group("Знайти добуток усіх цілих чисел від 15 до 35");

let multiplication = 1; 

for (let a = 15; a < 36; a++) {
 multiplication = a * multiplication; 
}

console.log(multiplication); 

console.groupEnd();

console.group("Знайти середнє арифметичне всіх цілих чисел від 1 до 500.");

let sum = 0;
let average = 0;

for (let k = 1; k < 501; k++) {
    sum = sum + k;
    average = sum / k; 
}

console.log(`The average is equal to ${average}`);

console.groupEnd();

console.group("Вивести суму лише парних чисел в діапазоні від 30 до 80.");

let sumOfeven = 0; 

for (let b = 30; b < 81; b++) {
    if (b % 2 === 0) {
        sumOfeven = sumOfeven + b;
    }    
}

console.log(sumOfeven);

console.groupEnd();