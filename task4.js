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

let numberArray = [];
let stringArray = [];
let booleanArray = [];

function sortArray(array) {
    for (let item of array) {
        switch (typeof item) {
            case 'number': 
                numberArray.push(item);
                break;
            case 'boolean':
                booleanArray.push(item);
                break;
            case 'string':
                stringArray.push(item);
                break;
        }
    }
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

sortArray(data);

let increasedArray = getDoubleUpAArray(numberArray);
let invertedArray = getInvertedArray(booleanArray);
let stringReplacedArray = getChangeLettersArray(stringArray);

console.log(increasedArray);
console.log(invertedArray);
console.log(stringReplacedArray);

