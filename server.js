const { json } = require("express")
const express =require("express")
const mongoose =require("mongoose")
const BrandName =require("./model")
const port =9000

const app =express()
app.use(express.json())

//sending the data to mongodb 
app.post("/addbrands",async(req,res)=>{
   const {brandname} =req.body
   try{
        const newData =new BrandName({BrandName})  // create new object with schema name
         await newData.save()    // save the data in mongodb
        return res.json(await BrandName.find()) //return the data
   }catch(err){
    console.log(err)
   }

})
// get the all DATA from mongodb storage
app.get("/getallbrands",async(req,res)=>{
    
    try{
        const allData =await BrandName.find()  //this all data store mongodb
        return res.json(allData)
    }
    catch(err){
        console.log(err)
       }
   
})
// for particular id we want to get the data from mongodb
app.get("/getallbrands/:id",async(req,res)=>{
    
    try{
        const Data = await BrandName.findById(req.params.id)  //from thet data get particulat id

        return res.json(Data)
    }
    catch(err){
        console.log(err)
       }
   
})
app.delete("/deletebrands/:id",async(req,res)=>{
    
    try{
        await BrandName.findByIdAndDelete(req.params.id)
        return res.json(await BrandName.find())
    }
    catch(err){
        console.log(err)
       }
   
})


mongoose.connect("mongodb+srv://123:123@cluster0.do97s.mongodb.net/?retryWrites=true&w=majority").then(data=>{
    app.listen(port,(req,res)=>{
        console.log(`Db connected,server is running at http://localhost:${port}`)
    })
}).catch(err=>{
    console.log(err)
});

