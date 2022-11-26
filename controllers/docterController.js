import Docter from "../models/docterModel.js";
import { MongoClient } from 'mongodb';

export const getDocterAll = async (req, res) => {
    try {

        const pipeline = [
            { $match: {} },
            // { $group: { _id: "$stars", count: { $sum: 1 } } }
        ];
        const client = new MongoClient('mongodb://localhost:27017');
        const coll = client.db("rumahsakit_db").collection("docters");
        const aggCursor = coll.aggregate(pipeline);
        const result = await aggCursor.toArray();
        await aggCursor.close();

        res.status(200).json(result);

    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getDocterAllWithPasiens = async (req, res) => {
    try {
        const pipeline = [
            {
              '$match': {}
            }, {
              '$lookup': {
                'from': 'pasiens', 
                'localField': '_id', 
                'foreignField': 'doctersId', 
                'as': 'pasiennya'
              }
            }
          ];
        const client = new MongoClient('mongodb://localhost:27017');
        // const coll = client.collection("docters");
        const coll = client.db("rumahsakit_db").collection("docters");
        const aggCursor = coll.aggregate(pipeline);
        const result = await aggCursor.toArray();
        await aggCursor.close();

        res.json(result);

    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getDocterById  = async (req, res) => {
    try {
        const docter = await Docter.findById(req.params.id);
        res.json(docter);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
} 

export const addDocter  = async (req, res) => {
    const docter = new Docter(req.body);
    try {
        const insertedDocter = await docter.save();
        res.status(201).json({data :insertedDocter, message: 'berhasil tambah data'});
    } catch (error) {
        res.status(400).json({message: error.message})
    }
} 


export const updateDocter  = async (req, res) => {
    try {
        const updatedDocter = await Docter.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(201).json(updatedDocter);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
} 

export const deleteDocter  = async (req, res) => {
    try {
        const deletedDocter= await Docter.deleteOne({_id:req.params.id});
        res.status(201).json(deletedDocter);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
} 
