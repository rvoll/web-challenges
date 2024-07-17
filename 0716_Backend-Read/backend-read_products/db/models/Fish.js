import mongoose from "mongoose";

// BAUPLAN, Dateneintragsstruktur:

const { Schema } = mongoose;

const FishSchema = new Schema({
  // muss (_)id hier rein?
  name: { type: string, required: true },
  description: { type: string, required: true },
  price: { type: number, required: false },
  currency: { type: string, required: false },
});
