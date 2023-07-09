// const mongoose=require("mongoose")
// mongoose.connect("")
// .then(()=>{
//     console.log("mongodb connected");
// })
// .catch(()=>{
//     console.log('failed');
// })


const mongoose=require("mongoose")

const newSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})



const collection = mongoose.model("collection",newSchema)



module.exports=collection
