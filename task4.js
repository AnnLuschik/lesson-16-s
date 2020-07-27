// Не окончено. Уточнить, каким образом выводить массивы..

let data= [
    'молоко', 
    34, 
    717, 
    false, 
    'копы', 
    true, 
    74, 
    108, 
    'погроммист', 
    'котик', 
    'мемчик', 
    true, 
    true, 
    666, 
    false
];

function sortArray(array) {
    let numberArray = array.filter(item => typeof item === 'number');
    let stringArray = array.filter(item => typeof item === 'string');
    let booleanArray = array.filter(item => typeof item === 'boolean');
    let undefinedArray = array.filter(item => typeof item === 'undefined');
    let objectArray = array.filter(item => typeof item === 'object');
    return [numberArray, stringArray, booleanArray, undefinedArray, objectArray];
}

function doubleUp(array) {
    array.map(item => item *= 2);
    return array;
}

function invertArray(booleanArray ) {
    booleanArray.map(item => !item);
}

let masArray = sortArray(data);

console.log(masArray);

let newNumberArray = doubleUp(numberArray);

console.log(newNumberArray);