import express from 'express';
const wardRouter = express.Router();

import {
	getWardById,
	searchWardByName,
} from '../services/wardService.js';

wardRouter.get('/search/:name', async (req, res) => {
	const { name } = req.params;
	if (!name) {
		res.status(400).send('No ward name provided');
		return;
	}
	try {
		const wards = await searchWardByName(name);
		if (wards) {
			console.log('Sending the wards info');
			res.send(wards);
		} else {
			res.status(401).send('No wards found');
		}
	} catch (err) {
		console.error(err);
		res.status(500).send(err);
	}
});

wardRouter.get('/:id', async (req, res) => {
	const { id } = req.params;
	if (!id) {
		res.status(400).send('No ward id provided');
		return;
	}
	try {
		const ward = await getWardById(id);
		if (ward) {
			res.send(ward);
		} else {
			res.status(401).send('No wards found');
		}
	} catch (err) {
		console.error(err);
		res.status(500).send(err);
	}
});

export default wardRouter;