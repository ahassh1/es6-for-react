 const person={
    name :'polash',
    age:24,
    friends:['ahasan','showon','jny','rony'],
    family:{
        member:6,
        other:'ofd'
    }
 }
 const jsonData = JSON.stringify(person)
 console.log(jsonData)

 const planData = JSON.parse(jsonData)
 console.log(planData)