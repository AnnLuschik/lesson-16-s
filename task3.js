function createPerson() {
    let person = {};

    person.firstName = prompt('Введите своё имя');
    person.surname = prompt('Введите свою фамилию');
    person.age = +prompt('Укажите свой возраст');

    person.addSpouse = function() {
        let married = prompt('Вы состоите в браке? Да / нет');
        while(true) {
            if (married.toLowerCase() === 'да') {
                married = true;
                break;
            } else if(married.toLowerCase() === 'нет') {
                married = false;
                break;
            } else married = prompt('Выберите из вариантов "да" и "нет".')
        }
        if(married) {
            this.spouse = {};
            this.spouse.name = prompt('Введите имя супруга');
            this.spouse.surname = prompt('Введите фамилию супруга');
            this.spouse.age = +prompt('Укажите возраст супруга');
        } 
    }
    
    person.addSpouse();
    
    person.addChild = function() {
        let parent = prompt('Есть ли дети? Да / нет');
        while(true) {
            if (parent.toLowerCase() === 'да') {
                parent = true;
                break;
            } else if(parent.toLowerCase() === 'нет') {
                parent = false;
                break;
            } else parent = prompt('Выберите из вариантов "да" и "нет".')
        }
        if(parent) {
            this.children = [];
            let number = +prompt('Сколько у Вас детей?');
            for (let i = 0; i < number; i++) {
                this.children[i] = {};
                this.children[i].name = prompt('Введите имя ребёнка');
                this.children[i].age = +prompt('Введите возраст ребёнка');
            }
        }
    }

    person.addChild();

    person.profession = prompt('Кто Вы по профессии?');

    return person;
}

person = createPerson();
console.log(person);
