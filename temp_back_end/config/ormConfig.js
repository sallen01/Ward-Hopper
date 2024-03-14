import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

const sequelize = new Sequelize({
	dialect: 'mysql',
	logging: false,
	host: process.env.DB_HOST,
	port: process.env.DB_PORT,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_DATABASE,
	pool: {
		max: parseInt(process.env.DB_CONNECTION_LIMIT) || 100,
		min: 0,
		acquire: 30000,
		idle: 10000,
	},
	define: {
		timestamps: true, // Enable timestamps (createdAt and updatedAt columns)
		createdAt: 'createdDate', // Set custom column name for createdAt
		updatedAt: 'updatedDate', // Set custom column name for updatedAt
	},
});
export default sequelize;