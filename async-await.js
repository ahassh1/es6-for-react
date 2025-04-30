  const loadData= ()=>{
    console.log("i'm first")
    console.log("i'm second")

    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res=> res.json())
    .then(data=> console.log(data))
    setTimeout(()=> {
             console.log('i am third')
    },1000)

    console.log('i am forth')
  }
  // here's fetch and settimeout or set interval is asyncronous function

loadData()

/////////////////////////////////////////////////////

const loading = async() => {
try{
  console.log('this is first')
  console.log('this is second')

  const response = await fetch('https://jsonplaceholder.typicode.com/comments/1')
    const data= await response.json();
    console.log(data)

    //here's fetch bofore await is a ssync function
    const result = 10+12;
    console.log(result)
}
catch{
  console.log('customizee error')
}
}
loading()


////////////////////////////////////////////////

async function fetchData(){
  const responsed = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  const data = await responsed.json();
  console.log(data)
}
fetchData()

