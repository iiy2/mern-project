const express = require("express");
const connectDB = require('./config/db');
const PORT = process.env.PORT || 3001;
const app = express();

//connect database
connectDB();

app.get('/', (req, res) => res.send('API Running'));

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));