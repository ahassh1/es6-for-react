  const loadData= ()=>{
    console.log("i'm first")
    console.log("i'm second")

    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res=> res.json())
    .then(data=> console.log(data))
    setTimeout(()=> {
             console.log('i am third')
    },2000)

    console.log('i am forth')
  }

loadData()