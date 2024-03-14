import sequelize from '../config/ormConfig.js';
import { DataTypes } from 'sequelize';

const Ward = sequelize.define(
	'Ward',
	{
		wardId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'WARD_ID',
		},
		wardName: {
			type: DataTypes.STRING(128),
			field: 'WARD_NAME',
		},
		wardAddress: {
			type: DataTypes.STRING(128),
			field: 'WARD_ADDRESS',
		},
		meetTime: {
			type: DataTypes.STRING(128),
			field: 'MEET_TIME',
		},
		overall: {
			type: DataTypes.DECIMAL,
			field: 'OVERALL',
		},
		activities: {
			type: DataTypes.DECIMAL,
			field: 'ACTIVITIES',
		},
		food: {
			type: DataTypes.DECIMAL,
			field: 'FOOD',
		},
		bishop: {
			type: DataTypes.DECIMAL,
			field: 'BISHOP',
		},
		genderRatio: {
			type: DataTypes.DECIMAL,
			field: 'GENDER_RATIO',
		},
		location: {
			type: DataTypes.DECIMAL,
			field: 'LOCATION',
		},
		spirituality: {
			type: DataTypes.DECIMAL,
			field: 'SPIRITUALITY',
		},
		createdDate: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'CREATED_DATE',
		},
		updatedDate: {
			type: DataTypes.DATE,
			allowNull: false,
			field: 'UPDATED_DATE',
		},
    },
	{
		tableName: 'WARD',
	}
);

export default Ward;