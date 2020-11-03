const axios = require('axios')

 const getAllProducts =  async () => {
    const  resp = await axios.get('http://test.ats-digital.com:3000/products?size=100');

    return resp.data;

}

module.exports = getAllProducts;
