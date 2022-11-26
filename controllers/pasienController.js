// import mongoose from "mongoose";
import Pasien from "../models/pasienModel.js";
import { MongoClient } from 'mongodb';

export const getPasienAll = async (req, res) => {
    try {
        const pasien = await Pasien.find()
        res.json(pasien);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
} 

export const getPasienAllWithdocter = async (req, res) => {
    try {
        const pipeline = [
            {
              '$match': {}
            }, {
                  '$lookup': {
                    'from': 'docters', 
                    'localField': 'doctersId', 
                    'foreignField': '_id', 
                    'as': 'dokternya'
                  }
                }
          ];
        const client = new MongoClient('mongodb://localhost:27017');
        const coll = client.db("rumahsakit_db").collection("pasiens");
        const aggCursor = coll.aggregate(pipeline);
        const result = await aggCursor.toArray();
        await aggCursor.close();

        res.json(result);

    } catch (error) {
        res.status(404).json({message: error.message})
    }
}


export const getPasienById  = async (req, res) => {
    try {
        const pasien = await Pasien.findById(req.params.id);
        res.json(pasien);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
} 

export const addPasien  = async (req, res) => {
    const pasien = new Pasien(req.body);
    try {
        const insertedPasien = await pasien.save();
        res.status(201).json(insertedPasien);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
} 


export const updatePasien  = async (req, res) => {
    try {
        const updatedPasien = await Pasien.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(201).json(updatedPasien);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
} 

export const deletePasien  = async (req, res) => {
    try {
        const deletedPasien= await Pasien.deleteOne({_id:req.params.id});
        res.status(201).json(deletedPasien);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
} 

