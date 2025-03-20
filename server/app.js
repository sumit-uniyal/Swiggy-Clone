require('dotenv').config();
const express = require('express'); 
const app = express();
const AuthRouter = require('./Routers/AuthRouter')
const cors = require('cors')
const connectDb = require('./Utils/DbConnection')

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials:true,
}
app.use(cors(corsOptions))
app.use(express.json())
app.use('/auth',AuthRouter);

PORT = process.env.PORT

connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log('Server is running');
    })
})