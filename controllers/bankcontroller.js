const express= require('express');
const mongoose= require('mongoose');

const Bank= require('../model/bankdata.js');

const router= express.Router();

const getBanks = async (req, res) => {
    try {
        const bank= await Bank.find();
        
        res.status(200).json(bank);
    } catch(error) {
        res.status(404).json({message: error.message});
    }
}

const getspecBank = async (req,res) => {
    const bank_identification_code = req.params.bank_identification_code;

    try {
        const bank = await Bank.findOne({bank_identification_code: bank_identification_code});

        res.status(200).json(bank);
    } catch(error) {
        res.status(404).json({ message: error.message});
    }
}

const createBank =  async (req, res) => {
    console.log(req.body);
    const newBank = new Bank({
        bank_reg_number:req.body.bank_reg_number,
        bank_identification_code:req.body.bank_identification_code,
        bank_name:req.body.bank_name,
        country:req.body.country,
        bank_name:req.body.bank_name,
        registered_address:req.body.registered_address

    })
    try {
        await newBank.save();

        res.status(201).json(newBank);

    } catch(error) {
        res.status(400).json({ message : error.message});
    }

}

const updateBank = async (req, res) => {
    const bank_identification_code= req.params.bank_identification_code;
    try{
        await Bank.findOneAndUpdate({
            bank_identification_code: bank_identification_code,
        },
        {   
            bank_reg_number:req.body.bank_reg_number,
            bank_name:req.body.bank_name,
            bank_name:req.body.bank_name,
            registered_address:req.body.registered_address
        }
        )
        res.status(202).json({bank_identification_code: bank_identification_code});

    } catch (error) {
        res.status(401).json({message: error.message});
    }
    
}

const deleteBank = async (req, res) => {
    const bank_identification_code= req.params.bank_identification_code;

    try {
        await Bank.findOneAndRemove({bank_identification_code: bank_identification_code});
        res.status(203).json({bank_identification_code:bank_identification_code});

    }catch(error) {
        res.status(402).json({message: error.message});
    }
}

module.exports.getBanks= getBanks;
module.exports.createBank= createBank;
module.exports.getspecBank= getspecBank;
module.exports.updateBank= updateBank;
module.exports.deleteBank= deleteBank;