const swaggerJSDoc=require("swagger-jsdoc")
const swaggerUi=require("swagger-ui-express")

const options={
    definition:{
        openapi:"3.0.0",
        info:{title:"frimp Exercise Api",version:"0.1.0"},

    },
    apis:["./src/v1/routes/workoutRoutes.js","./src/database/Workout.js"],
}

const swaggerSpec=swaggerJSDoc(options);

const swaggerDocs=(app,port)=>{

    app.use("/api/v1/docs.json",(req,res)=>{
        res.setHeader("Contents-Type","application/json")
        res.send(swaggerSpec)
    })
    console.log(`Version 0.1 is available on http://localost:${port}/api/v1/docs`)

}

module.exports={swaggerDocs}