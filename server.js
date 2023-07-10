const express = require('express');
//dot config
const dotenv = require('dotenv');
dotenv.config({ path: './config/config.env' });
//--------
const colors = require('colors');
const morgan = require("morgan");
const cors = require("cors");
// MongoDB connection
const connectDB = require("./config/db")
const path = require('path')

connectDB();

// rest object
const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
// app.get('/api.js', async (req, res) => {
//     try {
//         const response = await axios.get('https://apis.google.com/js/api.js?onload=__iframefcb739257');
//         res.setHeader('Content-Type', 'application/javascript');
//         res.send(response.data);
//     } catch (error) {
//         res.status(500).send('Error fetching script');
//     }
// });
// Routes
// 1 test route
// app.get('/', (req, res) => {
//     res.status(200).json({ message: "welcome to Blood Bank App" })
// })
app.use('/api/v1/test', require('./routes/testRoutes'))
app.use('/api/v1/auth', require('./routes/authRoutes'))
app.use('/api/v1/inventory', require('./routes/inventoryRoutes'))
app.use('/api/v1/analytics', require('./routes/analyticsRoutes'))
app.use('/api/v1/admin', require('./routes/adminRoutes'))

// // STATIC FOLDER
// app.use(express.static(path.join(__dirname, './client/build')));
// /// STATIC ROUTES
// app.get('*', function (req, res) {
//     res.sendFile(path.join(__dirname, './client/build/index.html'));
// })

//port
const PORT = process.env.PORT || 8080;

// listen
app.listen(PORT, () => {
    console.log(`Blood Bank Server is Running in ${process.env.DEV_MODE} Mode on PORT ${process.env.PORT}.`.bgYellow.black);
})