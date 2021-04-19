const express = require('express');
const router = express.Router();

// require the Drone model here
const MyDrone = require('../models/Drone.model')

//--CREATE--
//RENDER form to (user)--GET--
router.get('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
   res.render('drones/create-form.hbs')
});

//CREATE (user) form input--POST--
router.post('/drones/create', (req, res, next) => {
  // Iteration #3: Add a new drone
  const { name , propellers, maxSpeed } = req.body
   MyDrone.create({name , propellers, maxSpeed})
   .then(() => {
     res.redirect('/drones')
   }).catch((err) => {
     console.log(err)
   });
});

//--READ--GET

//----READ---GET 1 id
router.get('/drones/:id', (req, res, next)=>{
  //catch the id
  const { id } = req.params
  
  MyDrone.findById(id)
      .then((data)=>{
        // console.log(data)
        res.render('drones/drone-details.hbs', { data })
      })
      .catch((err)=>{
        console.log(err)
      })
   })

router.get('/drones', (req, res, next) => {
  // Iteration #2: List the drones
  MyDrone.find()
  .then((Alldrones) => {
    // console.log(drones)
    res.render('drones/list.hbs', { Alldrones })
    
  }).catch((err) => {
    console.log(err)
  });
 
});

//UPDATE--GET--
router.get('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params
 console.log('render page')
  MyDrone.findById(id)
  .then((drone) => {
   res.render('drones/update-form.hbs', {drone})
  })
  .catch((err) => {
   console.log(err) 
  });
});

//UPDATE--Post--
router.post('/drones/:id/edit', (req, res, next) => {
  // Iteration #4: Update the drone
  const { id } = req.params
  const {name, propellers, maxSpeed } = req.body

  MyDrone.findByIdAndUpdate(id , {name, propellers, maxSpeed} )
  .then(() => {
    res.redirect('/drones')
  }).catch((err) => {
    console.log(err)
  });
});

//--DELETE-- Post
router.post('/drones/:id/delete', (req, res, next) => {
  // Iteration #5: Delete the drone
  const { id } = req.params
 
  MyDrone.findByIdAndDelete(id)
  .then(() => {
    console.log(id)
    res.redirect('/drones')
  }).catch((err) => {
    console.log(err)
  });
 
});

module.exports = router;
