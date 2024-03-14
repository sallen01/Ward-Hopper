export class Review {
    wardId;
    reviewEntry;
    overall;
    activities;
    food;
    bishop;
    genderRatio;
    location;
    spirituality;
    likes;
    createdDate;
    updatedDate;
    constructor(wardId, reviewEntry, overall, activities, 
        food, bishop, genderRatio, location, spirituality) {
            this.wardId = wardId;
            this.reviewEntry = reviewEntry;
            this.overall = overall;
            this.activities = activities;
            this.food = food;
            this.bishop = bishop;
            this.genderRatio = genderRatio;
            this.location = location;
            this.spirituality = spirituality;
            this.likes = 0;
            this.createdDate = new Date();
            this.updatedDate = new Date();
        }
}