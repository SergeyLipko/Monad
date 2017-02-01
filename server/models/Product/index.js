import mongoose from 'mongoose';
const Schema = mongoose.Schema;


const ProductSchema = new Schema({
  designerId: String,
  isInStock: String,
  productName: String,
  productType: String,
  productDesigner: String,
  price: {
    purchase: Number,
    sale: Number,
  },
});

const Product = mongoose.model('Product', ProductSchema);


