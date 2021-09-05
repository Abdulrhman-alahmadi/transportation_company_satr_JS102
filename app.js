
// classes

//vehicle
class Vehicle {
    constructor(name, brand, id) {
        this.name = name;
        this.brand = brand;
        this.id = id;

    }

}

class Car extends Vehicle {

    constructor(name, brand, id, cartype) {
        super(name, brand, id);
        this.cartype = cartype;
    }
}


class Plane extends Vehicle {

    constructor(name, brand, id, planetype) {
        super(name, brand, id);
        this.planetype = planetype;
    }
}

class employee {

    constructor(name, dob, id) {
        this.name = name;
        this.dob = dob;
        this.id = id;
    }
}

class Driver extends employee {
    constructor(name, dob, id, driverlicenseID) {
        super(name, dob, id);
        this.driverlicenseID = driverlicenseID;
    }
}

class Pilot extends employee {
    constructor(name, dob, id, pilotlicenseID) {
        super(name, dob, id);
        this.pilotlicenseID = pilotlicenseID;
    }
}

class Reserved {

    constructor(reservationDate, employeeId, vehiclesId, reservationID) {
        this.reservationDate = reservationDate;
        this.employeeId = employeeId;
        this.vehiclesId = vehiclesId;
        this.reservationID = reservationID;
    }

}

// main
let vehicaleArray = [new Car('azera', 'hyundai', 101, 'electric'), new Car('sonata', 'hyundai', 201, 'gas'), new Car('elentra', 'hyundai', 301, 'gas'),
new Plane('PlaneBird', 'x-company', 500, 'ship-plane'), new Plane('PlaneEagle', 'y-company', 502, 'big-plane')];
let employeeArray = [new Driver("ali", "20-1-1998", 1000, 5000), new Pilot('ahmad', '1-6-1995', 2000, 10000)];

let reservationArray = [];

let reservationCounter = 1;

createNewReservetion(1000, 201);
createNewReservetion(2000, 502);
createNewReservetion(1000, 301);
reservationArray.map((ele) => {
    console.log("[ ", ele.reservationID, " ] the employee id is : ", ele.employeeId, ", and the vehicle id is [ ", ele.vehiclesId, " ] ");

});



function createNewReservetion(employeeId, vehicleId) {

    for (let index = 0; index < employeeArray.length; index++) {
        // first check if the employee is exist using the id.
        if (employeeArray[index].id == employeeId) {
            // check vehicle 
            let tempVehicle = checkVehicleExists(vehicleId);
            if (tempVehicle != null) {
                // now check for match with vehicle and the employee.
                let a = typeof tempVehicle;
                if (tempVehicle instanceof Car && employeeArray[index] instanceof Driver) {
                    // means the vehicle is a car and the employee is a driver.
                    // we can create a new object of reserved class.
                    reservationArray.push(new Reserved('9-2-2021', employeeId, vehicleId, reservationCounter));
                    reservationCounter++;
                    return;
                } else if (tempVehicle instanceof Plane && employeeArray[index] instanceof Pilot) {
                    // means the vehicle is a car and the employee is a driver.
                    // we can create a new object of reserved class.
                    reservationArray.push(new Reserved('9-2-2021', employeeId, vehicleId, reservationCounter));
                    reservationCounter++;
                    return;
                } else {
                    console.log("this Vehicle with id: [ " + vehicleId + " ] miss match with the employee with the id: [ " + employeeId + " ] please try again later...");
                    return;
                }

            } else {
                console.log("we dont have a vehicle in our system with the id of : ", vehicleId);
                return;
            }
        }

    }

    console.log("there is no employee with this id.");

}

function checkVehicleExists(vehicleId) {

    for (let index = 0; index < vehicaleArray.length; index++) {
        if (vehicaleArray[index].id == vehicleId) {
            return vehicaleArray[index];
        }
    }

    return null;

}




