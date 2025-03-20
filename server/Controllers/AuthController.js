const {OAuth2Client} = require('google-auth-library');
var jwt = require('jsonwebtoken');


const login = async(req,res)=>{
    try {
        const oAuth2Client = new OAuth2Client();
        const result = await oAuth2Client.verifyIdToken({
            idToken:req.body.token,
            expectedAudience:process.env.GOOGLE_CLIENT_ID
        });

        const { sub, name, email, picture } = result.getPayload();
        res.status(200).json({'msg':'Login successfully',name:name,email:email, picture:picture})
    } catch (error) {
        res.status(400).json({'msg':'Unable to login this time'})
    }
}

module.exports = {login}