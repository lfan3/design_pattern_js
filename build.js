class Car {
    constructor() {
        this.door = 4;
        this.description = "";
    }
    addDescription = (des) => this.description = des;
    getDescription = () => this.description;
}

class Truck {
    constructor() {
        this.door = 2;
        this.description = "";
    }
    addDescription = (des) => this.description = des;
}

class CarBuilder {
    car = null;
    step1 = () => {
        this.car =  new Car();
    }
    step2 = (des) => {
        this.car.addDescription(des)
    }
    get = () => this.car;
}

class TruckBuilder {
    truck = null;
    step1 = () => {
        this.truck =  new Truck();
    }
    step2 = (des) => {
        this.truck.addDescription(des)
    }
    get = () => this.truck;
}

class Shop {
    construct = (builder, des)=>{
        builder.step1();
        builder.step2(des);
        return builder.get();
    }
}

const carBuilder = new CarBuilder();
const truckBuilder = new TruckBuilder();

const shop = new Shop();
const car = shop.construct(carBuilder, "I am a beatiful car");
const truck = shop.construct(truckBuilder, " I am a strong truck");
console.log(car.getDescription())
console.log(truck.description)
