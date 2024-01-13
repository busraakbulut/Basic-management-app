import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
 product_name: {
  type: String,
  required: [true, 'Please provide a product name.'],
 },
 product_category: {
  type: String,
  required: [true, 'Please provide a product category.'],
 },
 product_amount: {
  type: Number,
  required: [true, 'Please provide a product amount.'],
 },
 amount_unit: {
  type: String,
  required: [true, 'Please provide a amount unit.'],
 },
 company: {
  type: mongoose.Schema.Types.ObjectId,
  ref: 'Company',
  required: [true, 'Please provide a company.'],
 },
});

const Product =
 mongoose.models.Product || mongoose.model('Product', ProductSchema);

export default Product;
