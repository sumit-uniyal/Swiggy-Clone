const {Schema, model} = require('mongoose')

const resturentSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    contact:{
        type:Number,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})

const restaurant = model('restaurant', resturentSchema);
module.exports = restaurant