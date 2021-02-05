const config = require('./src/config/config');
const server = require('./src/server/server');
const router = require('./src/api');
const { errorHandler } = require('./src/api/v1/middlewares/errorHandler');

server.route('/').get((req, res, next) => {
  res.status(200).json({ success: true });
});

server.use('/api', router);
server.use(errorHandler);

server.listen(config['port'], () => {
  console.log(`Success, Api is running on ${config['port']}`);
});
