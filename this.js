  class person{
     constructor(name,age){
        this.name=name;
        this.age= age;
     }
     sleep(){
        console.log(`${this.name} sleep at 11pm `)
     }
  }

  const habib= new person('habib',12)
  habib.sleep()

  const ahasan = new person('polash',22)
  console.log(ahasan)
  ahasan.sleep()

  console.log(this)