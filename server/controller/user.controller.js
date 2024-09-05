import mongoose from "mongoose";
import {  user } from "../model/user.schema.js";

async function findDocument() {
    try {
        const doc = await user.findOne({ someField: 'someValue' });
        //console.log(doc);
        const ctr = await user.countDocuments();
        //console.log(ctr);
        await mongoose.connection.collection('counters').updateOne(
            { _id: 'users_uid' },
            { $set: { seq: `${ctr+1}` } }
        )
        
        
        
        
    } catch (error) {
        console.error(error);
    }  
}findDocument();
export const addUser = async(req, res) => {
    const data = req.body;
    if(!data) {
        return res.status(400).json({error: "Invalid Request"})
    }
    const newUser = new user(data);
    try {
        await newUser.save();
        return res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
}
export const getAllUsers = async(req, res) => {
    try {
        const users = await user.find();
        return res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}
 export const getUser = async(req, res) => {
    //console.log(req.params.uid);
    try {
        const users = await user.find({ uid: req.params.uid });
        return res.status(200).json(users);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
 }
export const editUser = async(req, res) => {
    try {
        const body = req.body;
        const updateUser = new user(body);
        if(!updateUser) {
            return res.status(404).json({ msg: "User Not Found" });
        }
        await user.updateOne({_id: req.params.id},updateUser)
        return res.status(200).json({msg: "User Updated"});
    } catch (error) {
        res.status(500).json(error.message)
    }
}
export const deleteUser = async(req, res) => {
    try {
        const id = req.params.uid;
        const updateUser = await user.findOneAndDelete({uid: id})
        if(!updateUser) {
            return res.status(404).json({ msg: "User Not Found" });
        }
        return res.status(200).json({msg: "User Deleted"});
    } catch (error) {
        res.status(500).json(error.message)
    }
}

