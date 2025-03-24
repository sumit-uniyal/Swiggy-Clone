require('dotenv').config();
const express = require('express'); 
const app = express();
const AuthRouter = require('./Routers/AuthRouter')
const cors = require('cors')
const connectDb = require('./Utils/DbConnection')
const RestaurantRouter = require('./Routers/RestaurantRoute')
const path = require('path');

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials:true,
}
app.use(cors(corsOptions))
app.use(express.json())
app.use(express.urlencoded(
    { extended: true }
)); 

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/auth',AuthRouter);
app.use('/restaurant',RestaurantRouter);

PORT = process.env.PORT

connectDb().then(()=>{
    app.listen(PORT,()=>{
        console.log('Server is running');
    })
})