const express = require('express')
const bcrypt = require('bcrypt');
const {user} = require("../config/schema");
const {hash, genSalt} = require("bcrypt");
const {res} = require("express/lib/request");
console.log("Controller Work")
exports.validateUser = async (req,res,next)=>{
    req.query.limit='5'
    req.query.fields='uName,pNumber,role,pass'
    next();
}
exports.addUser = async(req,res)=>{
    try {
        const {uNAme,pNumber,role,pass}=req.body
        const saltRound =10;
        const salt =await genSalt(saltRound);
        const enycryptPass = await hash(pass,salt)

        const newUser = new user({
            uNAme,
            pNumber,
            role,
            pass:enycryptPass

        })

        await user.create(req.body);

        res.status(200).json({

    status:'user added success',
    data:{
        user:newUser
    }
});
    }catch (err){
        res.status(400).json({
            status:'fail',
            massage:err
        })

    }


}

exports.getAllUsers= async(req,res)=>{
    try {
        const users = await user.find();

        res.status(200).json({

            status:'getAllSuccess',
            data:{
                users
            }
        });

    }catch (err){

        console.log(err);
        res.status(404).json({
            status:"Error",
            massage:"User Not Or Has Some Problem"
        })
    }


}
exports.getUser = async(req,res)=>{
    try {
        const users = await user.findById(req.params.id)

        res.status(200).json({
            status:'success',
            data:{users}
        })
    } catch (err){
        res.status(404).json({
            status:'fall',
            massage:err
        })
    }
}
exports.updateUser = async(req,res)=>{
    try {
        const users = await user.findByIdAndUpdate(req.params.id,res.body)
res.status(200).json({ status:'success',
                data:{
                    users
                }})
    }catch (err){
        res.status(404).json({
            status:'fall',
           massage:err

        })

    }
}
exports.deleteUser = async(req,res)=>{
    try {
        await user.findByIdAndDelete(req.params.id);


        res.status(204).json({
            status:'success',

            data:null
        });

    }catch (err){

        res.status(404)({

            status:'fall',
            massage:err
        })
    }


}