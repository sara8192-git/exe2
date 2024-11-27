const express=require("express")
const cors=require("cors")
const app=express()
const PORT=process.env.PORT||4000





app.use(express.json())
app.use('/clothes',require('./routes/clothes'))
app.use('/people',require('./routes/people'))

app.listen(PORT,()=>{console.log(`this run in ${PORT}port`);})