const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors')


const connectDB = require('./config/db');

//connect database
connectDB();

var jsonParser = bodyParser.json()
app.use(cors())

//init middleware
app.use(jsonParser);

app.use('/api/products', require('./routes/api/allProducts'));
app.use('/api/product/', require('./routes/api/productById'))
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`server started on port ${PORT}`));