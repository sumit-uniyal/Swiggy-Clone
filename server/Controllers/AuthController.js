const {OAuth2Client} = require('google-auth-library');
const jwt = require('jsonwebtoken');
const User = require('../Models/UserSchema')

const login = async(req,res)=>{
    try {
        const oAuth2Client = new OAuth2Client();
        const result = await oAuth2Client.verifyIdToken({
            idToken:req.body.token,
            expectedAudience:process.env.GOOGLE_CLIENT_ID
        });

        const { sub, name, email, picture } = result.getPayload();
        const user = await User.findOne({'email':email});
        if(!user){
            const user =await User.create({
                name,
                email,
                profileImg:picture,
                password:'dummypass@123'
            })
        }
        res.status(200).json({'msg':'Login successfully',name:name,email:email, picture:picture,token:await user.getToken()})
    } catch (error) {
        res.status(400).json({'msg':'Unable to login this time'})
    }
}

module.exports = {login}