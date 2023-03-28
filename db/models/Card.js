import mongoose from "mongoose";

const { Schema } = mongoose;

const cardSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String, required: true },
  mapURL: { type: String, required: true },
  description: { type: String, required: true },
});

const Card = mongoose.models.Card || mongoose.model("Card", cardSchema);

export default Card;
