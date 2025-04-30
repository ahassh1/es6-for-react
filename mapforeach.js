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