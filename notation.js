const person={
    name : '',
    age:23,
    10: 'secret-code',
    'office-boss': 'ahassh'
}
const newPerson = person[10]
const newPersons= person['office-boss']
const newPer = person.name
console.log(newPer)

console.log(person['name'])

console.log(newPersons)
console.log(newPerson)


//try to districturing way
const {name ,age } = person;
console.log(name)