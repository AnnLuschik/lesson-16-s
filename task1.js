let array = [];

function changeArray(number, index) {
    while(array.length < number) {
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

