import mongoose from 'mongoose';

const enquirySchema = new mongoose.Schema(
  {
    nam: { type: String, required: true, trim: true },
    email: { type: String, required: true },
    mobile: { type: String, required: true },
    comment: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);
const Enquiry = mongoose.model('Enquiry', enquirySchema);
export default Enquiry;
