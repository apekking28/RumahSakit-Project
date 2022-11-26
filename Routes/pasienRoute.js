import express from "express";
import { getPasienAll,getPasienAllWithdocter,getPasienById, addPasien, updatePasien, deletePasien } from "../controllers/pasienController.js";
const router = express.Router();


router.get('/pasiens', getPasienAll)
router.get('/pasiens/getPasienAllWithdocter',getPasienAllWithdocter);
router.get('/pasiens/:id', getPasienById);
router.post('/pasiens', addPasien);
router.patch('/pasiens/:id', updatePasien);
router.delete('/pasiens/:id', deletePasien);


export default router;