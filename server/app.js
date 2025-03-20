const express = require('express'); 
const app = express();
const AuthRouter = require('./Routers/AuthRouter')

app.use(express.json())
app.use('/auth',AuthRouter);

PORT = 9000;
app.listen(PORT,()=>{
    console.log('Server is running');
})