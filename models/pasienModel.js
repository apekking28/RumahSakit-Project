import mongoose from "mongoose";

var Schema = mongoose.Schema
const ObjectId = Schema.ObjectId;
const Pasien = new Schema({
    name:{
        type: String,
        required: true,
        minlength: 3,
        maxlength: 30,
        unique: true 
    },
    address:{
        type: String,
        required: true
    },
    age:{
        type: String,
        required:true
    },
    docterId:{
        type: ObjectId,
        // require: true
    },
    rumahSakitId:{
        type: ObjectId,
        // required: true
    }
});



export default mongoose.model('pasiens', Pasien)

// db.pasiens.insertMany([
//     {
//         name: 'clayton',
//         address: 'jl.parapatan ciamis',
//         age: 17,
//         // docterId:'382348954c552bd7658c622',

//     }
// ])