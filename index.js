const express = require('express');
const app = express();
const http = require('http').createServer(app);
const mongoose = require('mongoose');
const dashboardRouter = require('./routers/admin-router.js');
const adminRouter = require('./routers/admin-router.js');
const userRouter = require('./routers/user-router.js');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const json = express.json();
const port = process.env.PORT || 3003;
dotenv.config();

const staticFiles = express.static('./front');
app.use(staticFiles);

app.use(json);
app.use(cookieParser());
app.use(cors());
app.use('/admin', adminRouter, dashboardRouter);
app.use('/user', userRouter);

(async () => {
    await mongoose.connect(process.env.DB_URL);
})();

http.listen(port, () => {
    console.log(`server is listening port ${port}`);
});
