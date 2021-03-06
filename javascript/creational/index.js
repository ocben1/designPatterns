// class pattern
// class Car {
//     constructor(doors,engine,color) {
//         this.doors = doors;
//         this.engine = engine;
//         this.color = color;
//     }
// }
//constructor pattern
// class SUV extends Car {
//     constructor(doors,engine,color) {
//         super(doors,engine,color);
//         this.wheels = 4;
//     }
// }

// const civic = new Car(2,'V6','grey');
// const cx5 = new Car(4,'V8','red');

// console.log(civic);
// console.log(cx5);

//singleton pattern checks for an instance of a class
//if no instance exists, create a new one - otherwise just return the instance
// let instance = null;
// flyweight pattern is a method to minimise creating the same items twice - similar approach to singleton
// class Car {
//     constructor(doors, engine, color) {
//         if (!instance) {
//             this.doors = doors;
//             this.engine = engine;
//             this.color = color;
//             instance = this;
//         } else {
//             return instance;
//         }
//     }
// }
// strategy pattern at work - reusing classes to create cars
// const civic = new Car(2,'V6','grey');
// const honda = new Car(4,'V7','orange');
// console.log(civic);
// console.log(honda);

//factory pattern is used to create multiple classes inside an application
// class Car {
//     constructor(doors, engine, color) {
//         this.doors = doors;
//         this.engine = engine;
//         this.color = color;
//     }
// }
// class CarFactory {
//     createCar(type) {
//         switch (type) {
//             case 'civic':
//                 return new Car(2, 'V6', 'grey');
//             case 'honda':
//                 return new Car(4,'V8','red');
//         }
//     }
// }

// const factory = new CarFactory();
// const myHonda = factory.createCar('honda');

// console.log(myHonda);

//abstract factory pattern takes it one layer of abstraction further
class Car {
    constructor(doors,engine,color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}
class CarFactory {
    createCar(type) {
        switch (type) {
            case 'civic':
                return new Car(2,'V6','grey');
            case 'honda':
                return new Car(4,'V8','red');
        }
    }
}
class SUV {
    constructor(doors,engine,color) {
        this.doors = doors;
        this.engine = engine;
        this.color = color;
    }
}
class SuvFactory {
    createCar(type) {
        switch(type) {
            case 'cx5':
                return new SUV(4,'V6','grey');
            case 'santa fe':
                return new SUV(2,'V8','red');
        }
    }
}
const carFactory = new CarFactory();
const suvFactory = new SuvFactory();

const automanufacturer = (type,model) => {
    switch(type) {
        case 'car':
            return carFactory.createCar(model);
        case 'suv':
            return suvFactory.createCar(model);
    }
}

const cx5 = automanufacturer('suv','cx5');

console.log(cx5);