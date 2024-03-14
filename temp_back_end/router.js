import express from 'express';
import wardRouter from './routers/wardRouter.js';
import reviewRouter from './routers/reviewRouter.js';

const router = express.Router();
router.use('*/ward', wardRouter);
router.use('*/review', reviewRouter);

export default router;
