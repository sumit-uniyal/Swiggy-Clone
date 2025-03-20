const {OAuth2Client} = require('google-auth-library');


const login = async(req,res)=>{
    try {
        // const oAuth2Client = new OAuth2Client();
        // res.status(200).json({'msg':'success'})

        // const result = await oAuth2Client.verifyIdToken({
        //     idToken,
        //     expectedAudience:process.env.GOOGLE_CLIENT_ID
        // });
        // const { sub, name, email, picture } = result.getPayload();
      res.send({'msg':'success1'})
    } catch (error) {
        console.log('error from controller '+error)
    }
}

module.exports = {login}