import express from 'express'
import mongoose from 'mongoose'
import route from './src/routes/route.js'

/*  ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐
    ⭐                                                  ⭐
    ⭐       //TODO This is BookManagement-Project      ⭐
    ⭐                        => BY GROUP-56            ⭐
    ⭐                                                  ⭐
    ⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐⭐                                                
*/
const app = express()
const PORT = 3000
const URI = 'mongodb+srv://riju:riju@cluster0.s4hmv.mongodb.net/group56Database'

app.use(express.json())

mongoose.connect(URI, {
    useNewUrlParser: true
})
    .then(() => console.log('MongoDB is connected'))
    .catch(err => console.log(err.message))

app.use('/', route)
app.use((req, res) => res.status(400).send({ status: false, message: 'Invalid URL Please Check' }))
app.listen(PORT, () => console.log(`Express app is running on port ${PORT}`))
