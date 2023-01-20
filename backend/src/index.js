const express=require('express')
const port=3000;
const app=express()

const v1Router=require('./v1/routes')

const v1Routerworkout=require('./v1/routes/workoutRoute')

// app.use('/api/v1',v1Router)

app.use('/api/v1/workout',v1Routerworkout)


// app.get('/',(req,res)=>{
//     res.send('<h1>Hello node js</h1>')
// })

app.listen(port,()=>{
    console.log(`server started on port ${port}`)
})