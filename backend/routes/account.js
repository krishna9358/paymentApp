const express = require('express');
const { authMiddleware } = require('../middleware');
const { Account } = require('../db');
const router = express.Router();
const mongoose = require('mongoose');

route.get ('/balance', authMiddleware , async (req, res) => {
    const account = await Account.findOne({ userId: req.user._id });
    res.json({ balance: account.balance });
})

route.post('/transfer', authMiddleware, async (req, res) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    const {amount , to } = req.body;
    const account = await Account.findOne({ userId: req.user._id }).session(session);
    const recipient = await Account.findOne({ userId: to }).session(session);

    if (!account || account.balance < amount){
        await session.abortTransaction();
        return res.status(400).json({
            message: "Insufficient Balnace",
        });
    }
    if (!recipient){
        await session.abortTransaction();
        return res.status(404).json({
            message: "Recipient not found",
        });
    }
    //transfer
    await Account.updateOne ({
        userId : req.userId
    }, {
        $inc: {
            balance: -amount,
        }
    }).session(session);
    
    await Account.updateOne({
        userId : recipient
    }, {
        $inc: {
            balance : amount
        }
    }).session(session);

    await session.commitTransaction();
    res.json({
        message: "Transfer Successful",
    });
});

module.exports = router;




