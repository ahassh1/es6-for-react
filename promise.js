   const loadData = () =>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
 .then(res=>res.json())
 .then(data=> console.log(data))
 .catch(err=>console.log(err))
}
loadData() 

/////////////////////////////////////////////////////////
const fetchData= () =>{

   return new Promise((resolve, reject) => {
      const status =true;
      if(status){
               const mockData = {
                  json:() => Promise.resolve({name:'polash'})
                }
           resolve (mockData)
      }

      else{
                 reject('server error')
      }
   })

}

   fetchData()
   .then(res=> res.json())
   .then(data=> console.log(data))
   .catch(err=> console.log(err))