const axios = require('axios')
const express = require('express');
const router = express.Router();
const getAllProducts = require('../../helpers/products')



router.get('/', async (req,res) => {
    try {
        // paginate here
         res.send(await   getAllProducts());

    } catch (err){
        console.error(err);
        res.status(500).send('Server Error');
    }

});

module.exports = router