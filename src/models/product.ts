import mongoose from 'mongoose';

const ProductSchema = new mongoose.Schema({
 Product_id: {
  type: mongoose.Schema.Types.ObjectId,
  required: [true, 'Please provide a user id.'],
 },
 product_name: {
  type: String,
  required: [true, 'Please provide a product name.'],
 },
 Product_category: {
  type: String,
  required: [true, 'Please provide a product category.'],
 },
 Product_amount: {
  type: Number,
  required: [true, 'Please provide a product amount.'],
 },
 Amount_unit: {
  type: String,
  required: [true, 'Please provide a amount unit.'],
 },
 Company: {
  type: String,
  required: [true, 'Please provide a company.'],
 },
});

const Product =
 mongoose.models.Product || mongoose.model('Product', ProductSchema);

export default Product;
