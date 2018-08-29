let store = {drivers: [], passengers: [], trips: []}
let driverId = 0
let passengerId = 0
let tripId = 0

class Driver {
  constructor(name){
    this.id = ++driverId
    this.name = name
    store.drivers.push(this)
  }
  trips(){
    return store.trips.filter(trip => {
      return trip.driverId === this.id
    })
  }
  passengers(){
    return store.passengers
  }
}

class Passenger {
  constructor(name){
    this.id = ++passengerId
    this.name = name
    store.passengers.push(this)
  }
  trips(){
    return store.trips.filter(trip => {
      return trip.passengerId === this.id
    })
  }
  drivers(){
    return store.drivers
  }
}

class Trip {
  constructor(driver, passenger){
    this.id = ++tripId
    if(driver){
      this.driverId = driver.id
    }
    if(passenger){
      this.passengerId = passenger.id
    }
    store.trips.push(this)
  }
  driver(){
    return store.drivers.find(function(driver){
      return driver.id
    })
  }
  passenger(){
    return store.passengers.find(function(passenger){
      return passenger.id
    })
  }
}
