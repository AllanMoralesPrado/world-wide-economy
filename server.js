require('dotenv').config();
const morgan = require('morgan');
const cors = require('cors');
const app = require('./app/app');
const router = require('./routes/router');
//const IAMChecking = require('./middleware/demo');
const { errorGenerator, errorHandler } = require('./error/errorHandler');

const PORT = process.env.PORT || 8000;
const http = require('http');
const server = http.createServer(app);

//app.use(IAMChecking);
app.use([
    morgan('dev'),
    cors(),
    router,
    errorGenerator,
    errorHandler,
]);

server.listen(PORT, () => {
    console.log(`Your server is running on http://localhost:${PORT}`);
});
