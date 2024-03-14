import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import router from "./router.js";
import sequelize from './config/ormConfig.js';

const server = express();
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({
  extended: false
}));
server.use(cors());
server.use('*/api', router);

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Now listening on Port-${port}`);
  sequelize
    .authenticate()
    .then(() => {
      console.log('Connection has been established successfully.');
    })
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    });
});