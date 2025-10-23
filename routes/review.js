const express = require('express');
const router = express.Router({mergeParams: true});
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema } = require("../schema.js");
const Review = require("../models/review.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, validateReview} = require("../middleware.js");

const reviewController = require("../controllers/review.js");

// const validateReview = (req, res, next) => {
//     let {error} = reviewSchema.validate(req.body);
//     if(error) {
//         let errorMsg = error.details.map(el => el.message).join(",");
//         throw new ExpressError(400, errorMsg);
//     } else {
//         next();
//     }};  

//REVIEWS 
//POST  REVIEW ROUTE
router.post("/", isLoggedIn, validateReview, wrapAsync(reviewController.createReview));

//DELETE REVIEW ROUTE
router.delete("/:reviewId", isLoggedIn, wrapAsync(reviewController.destroyReview));

module.exports = router;