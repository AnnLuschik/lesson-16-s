let family = {
    amount: 5,
    familyMembers: [
        {name: 'Borya', age: 15},
        {name: 'Tolya', age: 54},
        {name: 'Anjela', age: 45},
        {name: 'Snejana', age: 14},
        {name: 'Gavriil', age: 24},
    ],
    addOldestPerson() {
        let oldestPerson;
        let oldestPersonAge = 0;
        for (let person of this.familyMembers) {
            if (oldestPersonAge < person.age) {
                oldestPersonAge = person.age;
                oldestPerson = person;
            } 
        }
        this.oldestFamilyMember = oldestPerson;
        return this.oldestFamilyMember;
    }
}

family.addOldestPerson();
console.log(family);

console.log(family.addOldestPerson());