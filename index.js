import express from 'express'
import bodyParser from 'body-parser'
import sortRoutes from './routes/route.js'


const app = express()
const PORT = 5000

app.use(bodyParser.json())

app.use('/sort',sortRoutes)

//routes start from "/superheroes"
app.get('/',(response)=>{
    response.send("This is the homepage")
});
app.listen(PORT,()=>{
    console.log(`server running on port: http://localhost:${PORT}`)
});