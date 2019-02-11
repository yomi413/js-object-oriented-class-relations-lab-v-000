let store = { drivers: [], passengers: [], trips: [] };

let driverId = 0;

class Driver {
  constructor(name) {
    this.id = ++driverId;
    this.name = name;

    store.drivers.push(this);
  }

  trips() {
    return store.trips.filter(function(trip) {
      return trip.driverId === this.id;
    }.bind(this));
  }

  passengers() {
    return store.passengers.filter(function(passenger) {
      return passenger.driverId === this.driverId;
    }.bind(this));
  }
}

let passengerId = 0;

class Passenger {
  constructor(name) {
    this.id = ++passengerId;
    this.name = name;

    store.passengers.push(this);
  }

  trips() {
    return store.trips.filter(function(trip) {
      return trip.passengerId === this.id;
    }.bind(this));
  }

  drivers() {
    return store.drivers.filter(function(driver) {
      return driver.passengerId === this.passengerId;
    }.bind(this));
  }
}

let tripId = 0;

class Trip {
  constructor(driver, passenger) {
    this.id = ++tripId;
    if (driver) {
      this.driverId = driver.id;
    }
    if (passenger) {
      this.passengerId = passenger.id;
    }
    store.trips.push(this);
  }

  setDriver(driver) {
    this.driverId = driver.id;
  }

  setPassenger(passenger) {
    this.passengerId = passenger.id;
  }

  driver() {
    return store.drivers.find(function(driver) {
      return driver.id === this.driverId;
    }.bind(this));
  }

  passenger() {
    return store.passengers.find(function(passenger) {
      return passenger.id === this.passengerId;
    }.bind(this));
  }
}

// let store = {drivers: [], passengers: [], trips: []}
// let driverId = 0
// let passengerId = 0
// let tripId = 0
//
// class Driver {
//   constructor(name){
//     this.id = ++driverId
//     this.name = name
//     store.drivers.push(this)
//   }
//   trips(){
//     return store.trips.filter(trip => {
//       return trip.driverId === this.id
//     })
//   }
//   passengers(){
//     return store.passengers
//   }
// }
//
// class Passenger {
//   constructor(name){
//     this.id = ++passengerId
//     this.name = name
//     store.passengers.push(this)
//   }
//   trips(){
//     return store.trips.filter(trip => {
//       return trip.passengerId === this.id
//     })
//   }
//   drivers(){
//     return store.drivers
//   }
// }
//
// class Trip {
//   constructor(driver, passenger){
//     this.id = ++tripId
//     if(driver){
//       this.driverId = driver.id
//     }
//     if(passenger){
//       this.passengerId = passenger.id
//     }
//     store.trips.push(this)
//   }
//   driver(){
//     return store.drivers.find(function(driver){
// <<<<<<< HEAD
//       return driver.id
// =======
//       return driver.id
// >>>>>>> 8b88b8644656fb5684490b38a390b52ce594fbd7
//     })
//   }
//   passenger(){
//     return store.passengers.find(function(passenger){
//       return passenger.id
//     })
//   }
// }
