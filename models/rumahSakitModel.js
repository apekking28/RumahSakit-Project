import mongoose from "mongoose";

var Schema = mongoose.Schema
// const ObjectId = Schema.ObjectId;
const RumahSakit = new Schema({
    rumahSakit:{
        type:String,
        required:true,
        unique: true 
    },
    alamat:{
        type:String,
        // unique: true 
    }
});

export default mongoose.model('rumah_sakits', RumahSakit)
