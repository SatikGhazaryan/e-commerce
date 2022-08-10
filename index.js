const express = require('express');
const app = express();
const http = require('http').createServer(app);
const mongoose = require('mongoose');
const indexRouter = require('./routers');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const json = express.json();
const port = process.env.PORT || 3003;
dotenv.config();

const staticFiles = express.static('./front/user');
app.use(staticFiles);

app.use(json);
app.use(cookieParser());
app.use('/v1', indexRouter);

// (async () => {
//     await mongoose.connect(process.env.DB_URL);
// })();

(async () => {
    await mongoose.connect('mongodb+srv://zara:zara@finalprojectszal.hgnplxa.mongodb.net/userproject?retryWrites=true&w=majority');
})();

http.listen(port, () => {
    console.log(`server is listening port ${port}`);
});
