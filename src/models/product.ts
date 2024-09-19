import { Schema, model, models } from 'mongoose';

const productSchema = new Schema({
  name: String,
  price: Number,
  imageUrl: String,
  description: String,
  rating: Number,
});

const Product = models.Product || model('Product', productSchema);

export default Product;
