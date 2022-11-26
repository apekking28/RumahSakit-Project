import express from "express";
import { 
    getDocterAll, getDocterAllWithPasiens, getDocterById, addDocter, updateDocter, deleteDocter } from "../controllers/docterController.js";
// import { getDocterAll, getDocterById, addDocter, updateDocter, deleteDocter } from "../controllers/docterController.js";
const router = express.Router();


router.get('/docters', getDocterAll)
router.get('/docters/getDocterAllWithPasiens', getDocterAllWithPasiens)
router.get('/docters/:id', getDocterById);
router.post('/docters', addDocter);
router.patch('/docters/:id', updateDocter);
router.delete('/docters/:id', deleteDocter);


export default router;