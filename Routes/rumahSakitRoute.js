import express from "express";
import { getRumahSakitAll,getRumahAllWithDoctersPasiens,getRumahSakitById, addRumahsakit, updateRumahSakit, deleteRumahSakit } from "../controllers/rumahSakitController.js";
const router = express.Router();


router.get('/rumah_sakits', getRumahSakitAll)
router.get('/rumah_sakits/getRumahAllWithDoctersPasiens',getRumahAllWithDoctersPasiens);
router.get('/rumah_sakits/:id', getRumahSakitById);
router.post('/rumah_sakits', addRumahsakit);
router.patch('/rumah_sakits/:id', updateRumahSakit);
router.delete('/rumah_sakits/:id', deleteRumahSakit);


export default router;