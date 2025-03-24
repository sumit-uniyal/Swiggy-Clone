const restaurant = require('../Models/RestaurantSchema')
const multer  = require('multer')
const path = require('path');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, '../uploads/restaurant'));
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

const upload = multer({ storage: storage })


const createRestaurant = async(req,res)=>{
    try {
        
        const resData = await restaurant.create({
            name:req.body.name,
            description:req.body.description,
            contact:req.body.contact,
            address:req.body.address,
            image:req.file.originalname,
        })
       
        res.status(201).json({'msg':'restaurant added successfully',data:resData})
    } catch (error) {
        res.status(400).json({'msg':'Unable to add restaurant this time'+error})
    }
}

const getRestaurants = async(req,res)=>{
    try {
        const restData = await restaurant.find()
        const MovieData = restData.map((res)=>({
            ...res._doc,
            image:`${req.protocol}://${req.get('host')}/uploads/restaurant/${res.image}`
        }))
        res.status(200).json({'msg':'data get successfully',data:MovieData})
    } catch (error) {
        res.status(400).json({'msg':'Unable to get restaurant this time'})
    }
}

module.exports = { createRestaurant: [upload.single('image'), createRestaurant], getRestaurants };