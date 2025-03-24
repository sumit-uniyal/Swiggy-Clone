const {OAuth2Client} = require('google-auth-library')
const User = require('../Models/UserSchema')

const login = async(req,res)=>{
    try {
        const oAuth2Client = new OAuth2Client();
        const result = await oAuth2Client.verifyIdToken({
            idToken:req.body.token,
            expectedAudience:process.env.GOOGLE_CLIENT_ID
        });

        const { name, email, picture } = result.getPayload();
        const user = await User.findOne({'email':email});
        if(!user){
            const user =await User.create({
                name,
                email,
                profileImg:picture,
                password:'dummypass@123',
                isAdmin:false,
            })
        }
        res.status(200).json({'msg':'Login successfully',name:user.name,email:user.email, picture:user.profileImg,token:await user.getToken(), isAdmin:user.isAdmin})
    } catch (error) {
        res.status(400).json({'msg':'Unable to login this time '+error})
    }
}

module.exports = {login}