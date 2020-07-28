let data = [
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
    return {numberArray, stringArray, booleanArray, undefinedArray, objectArray};
}

function getDoubleUpAArray(array) {
    return array.map(item => item * 2);
}

function getInvertedArray(booleanArray) {
    return booleanArray.map(item => !item);
}

function getChangeLettersArray(array) {
    return array.map(function(item) {
        if(item.match(/о/)) {
            item = item.split('о');
            return item = item.join('л');
        } return item;
    });
}

let sortedArrayObject = sortArray(data);
let increasedArray = getDoubleUpAArray(sortedArrayObject.numberArray);
let invertedArray = getInvertedArray(sortedArrayObject.booleanArray);
let stringReplacedArray = getChangeLettersArray(sortedArrayObject.stringArray);

console.log(increasedArray);
console.log(invertedArray);
console.log(stringReplacedArray);

