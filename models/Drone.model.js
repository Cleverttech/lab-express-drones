// Iteration #1
const { Schema, model } = require('mongoose')

let DroneSchema = new Schema({
  name: String,
  propellers: Number,
  maxSpeed: Number
  },
  { 
    timestamps: true // records the time the project was created or updated
  })

 let NewDrone = model('drone', DroneSchema) 
module.exports = NewDrone