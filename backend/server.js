const express = require('express');
const connectDB = require('./config/db');
var bodyParser = require('body-parser')

const cors = require('cors');

const app = express();
app.use(bodyParser.json({ type: 'application/*+json' }))

const testcoverages = require('./routes/api/testcoverages');

// Connect Database
connectDB();
app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

app.use('/api/testcoverages', testcoverages);
app.use("/api/dp-qa", require("./routes/api/componentRoutes"))
app.use("/api/dp-qa", require("./routes/api/acheivementRoutes"))

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server running on port ${port}`));