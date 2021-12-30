const mongoose = require('mongoose');

//congigured the config.env file
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = require('./app');

//databse connection

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose.connect(DB).then(() => console.log('DB connection successful!'));

const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
