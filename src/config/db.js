const mongoose = require('mongoose');
const config = require('./config');

const connectDB = async () => {
  const connection = await mongoose.connect(config.db_connection, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  console.log(`MongoDB Connected: ${connection.connection.host}`);
};

module.exports = connectDB;
