// Task 1
let array = [];

function changeArray(number, index) {
    for(let i = 0; i < number; i++) {
        array.push(+prompt('Введите число'));
    }

    let operation = prompt('Увеличить или уменьшить массив?');

    while(true) {
        if (operation.toLowerCase() === 'увеличить') {
            return array.map(function(item) {
                return item = item * index;
            });
    
        } else if (operation.toLowerCase() === 'уменьшить') {
            return array.map(function(item) {
                return item = item / index;
            });

        } else operation = prompt('Недопустимое значение. Выберите из двух вариантов: увеличить либо уменьшить.');
    } 
}

let number = prompt('Сколько чисел Вы хотите добавить в массив?');

while(true) {
    if (number.match(/\D/gu)) {
        number = prompt('Необходимо ввести число');
    } else {
        number = +number;
        break;
    };
}

let index = prompt('Укажите коэффициент изменения массива');

while(true) {
    if (index.match(/\D/gu) || index == 0) {
        index = prompt('Необходимо ввести положительное число');
    } else {
        index = +index;
        break;
    };
}

console.log(array);
array = changeArray(number, index);
console.log(array);

// Task 2

function getPartOfString(string, start, end) {
    if(start === 0 && end === 0) {
    return string;

    } else if(start === end) {
        return string.slice(start, end + 1);

    } else if(start < 0 && end >= 0) {
        return string.slice(end, start);

    } else if(start > 0 && end < 0) {
        return string.slice(start, end);

    } else if(start < 0 && end < 0) {
        if(start < end) {
            return string.slice(start, end);
        } else return string.slice(end, start);

    } else if(start > end) {
        return string.substring(start, end);

    } else if (start >= string.length || end >= string.length) {
        return string.substring(start, end);

    } else return string.slice(start, end);
}

let userString = prompt('Напишите что-нибудь длинное');

let startIndex = prompt('Укажите начало диапазона для извлечения. Нумерация начинается с 0.');

while(true) {
    if (startIndex.match(/\D/gu)) {
        startIndex = prompt('Необходимо ввести число');
    } else {
        startIndex = +startIndex;
        break;
    };
}

let endIndex = prompt('Укажите конец диапазона для извлечения. Нумерация начинается с 0.');
while(true) {
    if (endIndex.match(/\D/gu)) {
        endIndex = prompt('Необходимо ввести число');
    } else {
        endIndex = +endIndex;
        break;
    };
}

console.log(getPartOfString(userString, startIndex, endIndex));