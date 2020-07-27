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