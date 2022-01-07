const express = require("express");

const  Bank_Act = require("../controllers/bankcontroller"); 

const router = express.Router();

router.get('/', Bank_Act.getBanks);
router.get('/:bank_identification_code', Bank_Act.getspecBank);
router.post('/', Bank_Act.createBank);
router.patch('/:bank_identification_code', Bank_Act.updateBank);
router.delete('/:bank_identification_code', Bank_Act.deleteBank);

module.exports=router;