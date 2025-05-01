const friends =['polash','habib', 'ahasan']
const [element3, element2, element5] = friends;
console.log(element2, element3, element5)

console.log(friends[2])

////////////////////////////////////////////////////

const person={
    name:'shuba',
    age:23,
    friendss:['alam','jahan'],
    otherFriends:{
        counrty: 'bd',
        status:'married'
    }
}

const {name,age, friendss, otherFriends}= person
console.log(otherFriends.status)
console.log(age)