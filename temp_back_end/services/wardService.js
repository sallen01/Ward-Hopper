import { Op } from 'sequelize';
import {
	Ward,
	Review,
} from '../models/associations.js';

export const getWardById = async (wardId) => {
	const ward = await Ward.findByPk(wardId, {
	  include: [
		{
		  model: Review,
		  as: 'reviews',
		},
	  ],
	  order: [[{ model: Review, as: 'reviews' }, 'reviewId', 'DESC']],
	});
	return ward || false;
  };

export const searchWardByName = async (wardName) => {
	try {
		const wards = await Ward.findAll({
			where: {
				wardName: {
					[Op.like]: `%${wardName}%`,
				},
			},
		});

		console.log(wards);
	
		return wards || false;
	} catch (error) {
		console.error('Error searching wards by name:', error);
		throw error;
	}
};