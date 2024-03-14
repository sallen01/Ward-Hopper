import sequelize from '../config/ormConfig.js';
import { DataTypes } from 'sequelize';
import Ward from './ward.js';

const Review = sequelize.define(
	'Review',
	{
		reviewId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
			field: 'REVIEW_ID',
		},
        wardId: {
			type: DataTypes.INTEGER,
			allowNull: false,
			references: {
				model: Ward,
				key: 'wardId',
			},
			field: 'WARD_ID',
		},
		reviewEntry: {
			type: DataTypes.STRING(512),
			field: 'REVIEW_ENTRY',
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
        likes: {
			type: DataTypes.INTEGER,
			field: 'LIKES',
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
		tableName: 'REVIEW',
	}
);

export default Review;