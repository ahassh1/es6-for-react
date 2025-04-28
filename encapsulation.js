class person{
    #status;
    constructor(name, age , status){
        this.name= name
        this.age= age;
        this.#status= status;
    }
    read(){
        console.log(`${this.name} is reading`)
    }
    action(){
        console.log(this.#status)
    }
}

 const polash = new person ('habib',23,'unmarrid');
 polash.read()
 polash.action()