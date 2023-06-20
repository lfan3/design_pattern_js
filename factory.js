
// concrete object
class HistoryBook{
    constructor() {
        this.category = "History";
    }
    description = () => console.log( "This is a history book" );

}

class ScienceBook{
    constructor(){
        this.category = "Science";
    }
    description = () => console.log("This is a science book" );
}

// concreat factory, return an instance of object
class BookFactory{
    create = (categorie)=> {
        if(categorie === "S")
            return new ScienceBook();
        else if(categorie === "H")
            return new HistoryBook();
    }
}

const bookFac = new BookFactory();
const book1 = bookFac.create("S");
const book2 = bookFac.create("H");
book1.description();
book2.description();

class Car {
    constructor() {
        this.door = 4;
    }
    description = () => console.log(" This is a car")
}

class Truck {
    constructor() {
        this.door = 2;
    }
    description = () => console.log("This is a truck")
}

class TransportFactory {
    create = (type) => {
        if(type === "truck")
            return new Truck();
        else 
            return new Car();
    }
}

const transportFac = new TransportFactory();
const truck = transportFac.create("truck");
truck.description();