const rideService = require('../services/ride.service');
const { validationResult } = require('express-validator');

module.exports.createRide = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { userId, pickup, destination, vehicleType } = req.body;

    try {
        const ride = await rideService.createRide({ user:userId,  pickup, destination, vehicleType });
        res.status(201).json(ride);

    }
    catch(error){
        return res.status(500).json({message:error.message})
    }
}

module.exports.getfare = async (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
console.log(req.query.pickup);
    const {pickup,destination} = req.query;

    try{
        const fare = await rideService.getFare(pickup,destination);
        return res.status(200).json(fare);

    }
    catch(error){
        return res.status(500).json({message:error.message})
    }
}