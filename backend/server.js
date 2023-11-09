const express = require('express');
const connectDB = require('./config/db');
var bodyParser = require('body-parser')

const cors = require('cors');

const app = express();
app.use(bodyParser.json({ type: 'application/*+json' }))

// Connect Database
connectDB();
app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));

app.use('/api/testcoverages', require('./routes/api/testcoverages'));
app.use("/api/dp-qa", require("./routes/api/componentRoutes"))
app.use("/api/dp-qa", require("./routes/api/acheivementRoutes"))
app.use("/api/dp-qa", require("./routes/api/executionRoutes"))

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));