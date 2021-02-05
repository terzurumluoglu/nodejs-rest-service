const config = require('./src/config/config');
const server = require('./src/server/server');

server.route('/').get((req, res, next) => {
  res.status(200).json({ success: true });
});

server.listen(config['port'], () => {
  console.log(`Success, Api is running on ${config['port']}`);
});
