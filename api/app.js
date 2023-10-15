const express = require('express');
const app = express();
const cors = require('cors');
const posts = require('./routes/posts');
const auth = require('./routes/auth');
const port = process.env.PORT || 3000;
const cookieParser = require('cookie-parser');
require('dotenv').config();
require('./DATABASE/connect');
const connectDB = require('./DATABASE/connect');
// middleware
app.use(cors({ credentials: true, origin: 'https://forum-website-api.vercel.app' }));
app.use(express.json());
app.use(cookieParser());

//routes
app.use('/posts', posts)
app.use('/', auth);


const start = async () => {
    try {
        await connectDB(process.env.ConnectionString);
        app.listen(port, () => {

            console.log(`Server running on port ${port}`);
        })
    } catch (error) {
        console.log("error", error.message);
    }
}

start();

