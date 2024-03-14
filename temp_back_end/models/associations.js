import Ward from './ward.js';
import Review from './review.js';
export {
	Ward,
	Review,
};

//Ward Associations
Ward.hasMany(Review, {
	foreignKey: 'wardId',
	as: 'reviews',
});