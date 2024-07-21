import mongoose from "mongoose";

const { Schema } = mongoose;

const reviewSchema = new Schema({
  title: { type: String, required: true },
  text: { type: String, required: true },
  rating: { type: Number, required: true },
});

const Review = mongoose.models.Review || mongoose.model("Review", reviewSchema);

export default Review;

// _id: { type: String, required: true },
// type: String?
// or  _id: { type: mongoose.Schema.Types.ObjectId, required: true },
// MongoDB's ObjectId type.
// (Chat GPT)
// Shouldn't be here but
// why is the _id left out?
