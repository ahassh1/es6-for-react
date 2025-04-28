class Vehicle{
    constructor(name,price){
        this.name= name;
        this.prize = price;
    }
    move(){
        console.log('the vehicle is runing superb')
    }
}

class Car extends Vehicle{
    constructor(name,price,oil){
        super(name,price)
        this.oil=oil;
    }
    route(){
        console.log('i am buying a car')
    }
}
class Bike extends Vehicle{
    constructor(name, price, other){
        super(name,price);
        this.other=other;
    }
    load(){
        console.log('bike is running going well for this moment and prototypical inheritance is done')
    }
}