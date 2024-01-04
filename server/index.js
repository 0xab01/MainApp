const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();

const app = express();


app.use('/,', require('./routes/authRoutes'))


const port = 8000;

app.listen(port, () => console.log(`Server is running on port ${port}`));
