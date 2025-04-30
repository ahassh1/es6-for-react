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

 /////////////////////////////////////////////////////////

 const products=[
    {name:'samsung',brand:'samson', price:12000,color:'black'},
    {name:'apple',brand:'ios', price:100000,color:'white'},
    {name:'ewfa',brand:'affas', price:16000,color:'black'},
    {name:'faesrw',brand:'o9j9', price:18000,color:'red'},
    {name:'aref',brand:'ajfsio', price:11000,color:'red'},
    {name:'afse',brand:' faswr', price:15000,color:'red'}
]

const newData ={
    name: 'walton', 
    brand:'oweoi',
    price:23090,
    color:'yellow',
    other:['lsdjfo','fois'],
    operation:{
        band:'asofdj',
        fods:34
    }
}

const neww = [...products, newData]
console.log(neww)


const remaining = products.filter(product => product.color!== 'red');
console.log(remaining)

const newww = [ ...remaining, newData]
console.log(newww)