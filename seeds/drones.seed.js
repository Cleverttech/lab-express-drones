// Iteration #1
require('../db')

const mongoose  = require('mongoose')
let myDrone = require('../models/Drone.model.js')

let drone = [
    {
     name: "scrapper",
     propellers: 3,
     maxSpeed: 17
    },
    {
     name: "skyWinner XL 500",
     propellers: 2,
     maxSpeed: 12
    },
    {
     name: "skyDominos 3000i",
     propellers: 4,
     maxSpeed: 16
    },
]

myDrone.create(drone)
.then(()=>{
  console.log("Drone item was created")

  //close connection
  mongoose.connection.close()
})
.catch((err)=>{
 console.log(err)
})