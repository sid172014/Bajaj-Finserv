const express = require('express');

const router = new express.Router();

router.get('/bfhl', (req, res) => {
    try{
        res.status(200).json({ operation_code: 1 });
    }catch(e){
        res.status(500).json({
            message : "Internal Server Error!"
        });
    }
});
  
module.exports = router;