import RumahSakit from "../models/rumahSakitModel.js";
import { MongoClient } from 'mongodb';

export const getRumahSakitAll = async (req, res) => {
    try {

        const pipeline = [
            { $match: {} }
        ];
        const client = new MongoClient('mongodb://localhost:27017');
        const coll = client.db("rumahsakit_db").collection("rumah_sakits");
        const aggCursor = coll.aggregate(pipeline);
        const result = await aggCursor.toArray();
        await aggCursor.close();

        res.json(result);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getRumahAllWithDoctersPasiens = async (req, res) => {
    try {
        const query = [
            {
              '$lookup': {
                'from': 'docters', 
                'let': {
                  'id': '$_id'
                }, 
                'pipeline': [
                  {
                    '$match': {
                      '$expr': {
                        '$eq': [
                          '$rumahSakitId', '$$id'
                        ]
                      }
                    }
                  }, {
                    '$lookup': {
                      'from': 'pasiens', 
                      'let': {
                        'id': '$_id'
                      }, 
                      'pipeline': [
                        {
                          '$match': {
                            '$expr': {
                              '$eq': [
                                '$doctersId', '$$id'
                              ]
                            }
                          }
                        }
                      ], 
                      'as': 'pasien'
                    }
                  }
                ], 
                'as': 'Dokter'
              }
            }
          ];
        const client = new MongoClient('mongodb://localhost:27017');
        // const coll = client.collection("docters");
        const coll = client.db("rumahsakit_db").collection("rumah_sakits");
        const aggCursor = coll.aggregate(query);
        const result = await aggCursor.toArray();
        await aggCursor.close();
        // console.log(result);

        res.json(result);

    } catch (error) {
        res.status(404).json({message: error.message})
    }
}

export const getRumahSakitById  = async (req, res) => {
    try {
        const rumahsakit = await RumahSakit.findById(req.params.id);
        res.json(rumahsakit);
    } catch (error) {
        res.status(404).json({message: error.message})
    }
} 

export const addRumahsakit  = async (req, res) => {
    const rumahsakit = new RumahSakit(req.body);
    try {
        const insertedRumahSakit = await rumahsakit.save();
        res.status(201).json(insertedRumahSakit);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
} 


export const updateRumahSakit  = async (req, res) => {
    try {
        const updatedRumahsakit = await RumahSakit.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(201).json(updatedRumahsakit);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
} 

export const deleteRumahSakit  = async (req, res) => {
    try {
        const deletedRumahSakit= await RumahSakit.deleteOne({_id:req.params.id});
        res.status(201).json(deletedRumahSakit);
    } catch (error) {
        res.status(400).json({message: error.message})
    }
} 