const { model, Schema }  = require("mongoose");
const bcrypt =  require("bcryptjs");
const jwt = require('jsonwebtoken');

const userSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
    },
    email:{
        type:String,
        required:true
    },
    profileImg:{
        type:String
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
})

userSchema.pre('save', async function(next){
    try {
        const salt = await bcrypt.genSalt(10);
        return this.password = await bcrypt.hash(this.password, salt);
    } catch (error) {
        console.log('Error in Encrypting password '+error);
    }
    next()
})

userSchema.methods.getToken = async function(){
    try {
        return token = jwt.sign({ name: this.name, email:this.email  }, process.env.JWT_TOKEN_KEY);
    } catch (error) {
        console.log('Error in genrating token')
    }
}
const User = model('user',userSchema);

module.exports = User