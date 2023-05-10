const express = require ("express");
const rpslsModel = require("../models/users")
const router = express.Router();

router.post('/', (req, res)=>{
    try{
        rpslsModel.create(req.body).catch((error)=>{console.log(error)});

    }catch(error ){
    console.log(error);
    }
console.log(req.body);
res.send(req.body);
});

router.get('', async(req, res)=> {
   const results = await rpslsModel.find()
    res.send(results)
})
module.exports =router;