const express = require('express')
const mongoose = require('mongoose')
const app = express()
const dotenv  = require('dotenv')
const bodyParser = require('body-parser')
const cors = require('cors')
const Router = require('./routes/event.js')



dotenv.config()

const connectMongo = async () => {
    try {
        await mongoose.connect(process.env.DB,{
            useNewUrlParser:true
        })
        console.log("Connected to MongoDB")
    } catch (err) {
        throw err
    }
}


app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.json())
app.use(cors())
app.use('/',Router)


// app.use('/api/role', Rolerouter)


app.listen(process.env.PORT, () => {
    connectMongo()
    console.log('listening on port '+process.env.PORT)

})
