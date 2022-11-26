import mongoose from "mongoose";

var Schema = mongoose.Schema
const ObjectId = Schema.ObjectId;
const Docter = new Schema({
    name:{
        type:String,
        required:true,
        minlength: 3,
        maxlength: 30,
        unique: true 
    },
    noHp:{
        type:String,
        required:true,
        unique: true 
    },
    age:{
        type:String,
        required:true,
    },
    pasienId:{
        type: ObjectId,
    }
});

export default mongoose.model('docters', Docter)

// db.docters.insertMany([
//     {
//         name:"Dr.ilham",
//         noHp:"08474356762",
//         age:38,
//     },
//     {
//         name:"Dr.nago",
//         noHp:"08474356762",
//         age:27,
//     },
//     {
//         name:"Dr.anjay",
//         noHp:"0847435679864",
//         age:26,
//     }
// ])