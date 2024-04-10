const mongoose =require("mongoose");
const plm =require("passport-local-mongoose")

mongoose.connect("mongodb://localhost:27017/pin");

const userSchema =mongoose.Schema({
    username:String,
    password:Number,
    email:String,
    mobile:Number,
    post:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:'post'
    }],
    profileImage:String,
    boards:{
        type:Array,
        default:[]
    },
});

userSchema.plugin(plm);


module.exports =mongoose.model("users",userSchema)
