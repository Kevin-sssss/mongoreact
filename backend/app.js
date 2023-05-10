const express = require('express');
const connectDB = require("./db");
const bodyParser = require('body-parser');
const rpsls = require("./routes/rpsls");
const cors = require("cors");
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/rpsls', rpsls);
connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));