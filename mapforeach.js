const products=[
    {name:'samsung',brand:'samson', price:12000,color:'black'},
    {name:'apple',brand:'ios', price:100000,color:'white'},
    {name:'ewfa',brand:'affas', price:16000,color:'black'},
    {name:'faesrw',brand:'o9j9', price:18000,color:'red'},
    {name:'aref',brand:'ajfsio', price:11000,color:'red'},
    {name:'afse',brand:' faswr', price:15000,color:'red'}
]
const result = products.map(product =>{
    return(product)
});
console.log(result)



const pri = products.map(product => product.price)
console.log(pri)

///////////////////////////////////////////////////////

products.forEach(produc => console.log(produc));


products.forEach(produc ={

})

////////////////////////////////////////////////////////////

const resultt = products.filter(producc=> producc.color=='black')
const resulttt = products.filter(producc=> producc.price>=16000)
console.log(resultt)
console.log(resulttt)

///////////////////////////////////////////////////////////

const search = products.find(produ => produ.color != 'black')
console.log(search)