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

 //////////////////////////////////////////////////////////

 const element={
     name:'polassh',
     agee:34,
     other:'shu'
 }
 const keyFind = Object.keys(element);
 const valueFind = Object.values(element);
 console.log(keyFind)
 console.log(valueFind)