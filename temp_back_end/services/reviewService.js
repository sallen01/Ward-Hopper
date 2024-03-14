import {
	Review,
} from '../models/associations.js';

export const createReview = async (review) => {
	const response = await Review.create(review);
	return response || false;
};
