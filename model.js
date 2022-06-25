const mongoose =require("mongoose")

const BrandName =mongoose.Schema({
    BrandName:{
        type:String,
        required:true,
    },
    Date:{
        type:Date,
        default:Date.now
    }
})

module.exports=mongoose.model("brandname",BrandName)