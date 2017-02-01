import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const DesignerSchema = new Schema({
  designerName: String,
  location: String,
  comment: String,
  designerContacts: {
    phoneNumber: Number,
    email: String,
  },
});

const Designer = mongoose.model('Designer', DesignerSchema);
