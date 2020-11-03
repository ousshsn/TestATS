const axios = require('axios')
const express = require('express');
const router = express.Router();
const getAllProducts = require('../../helpers/products')

router.get('/:c', async (req,res) => {
    try {
        let col = req.params.c;
      const  product = (await getAllProducts()).products.reduce((acc,val) => {
          if (val.color === col){
              acc = val;
          }
          return acc;
      },{});
        res.send(product);

    } catch (err){
        console.error(err);
        res.status(500).send('Server Error');
    }

});

module.exports = router;