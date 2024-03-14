import express from 'express';
const reviewRouter = express.Router();

import {
    createReview,
} from '../services/reviewService.js';

const validateCreateReviewRequest = (req) => {
	if (
		!req.body ||
		!req.body.wardId ||
		!req.body.reviewEntry ||
		!req.body.overall ||
        !req.body.activities ||
		!req.body.food ||
		!req.body.bishop ||
        !req.body.genderRatio ||
		!req.body.location ||
		!req.body.spirituality
	) {
		return false;
	}
	return true;
};

reviewRouter.post('/create', async (req, res) => {
	if (!validateCreateReviewRequest(req)) {
		return res
			.status(400)
			.send(
				'Information missing for review creation\n' + JSON.stringify(req.body)
			);
	}
	try {
		const review = await createReview(req.body);
		if (review) {
			return res.send(review);
		} else {
			res.status(401).send('No review created');
		}
	} catch (err) {
		console.error(err);
		return res.status(500).send(err);
	}
});

export default reviewRouter;