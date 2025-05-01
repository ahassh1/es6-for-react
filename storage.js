const headleAddToClick=()=>{
    const name = document.getElementById('name').value 
    const id = document.getElementById('id').value ;
    // localStorage.setItem(id,name)
    
    const data ={id, name}
   localStorage.setItem (id,JSON.stringify(data)) 
}

 const storedItem = localStorage.getItem('234')
 console.log(JSON.parse(storedItem));

//  const handleClear= ()=> {
//     localStorage.clear()
//  }