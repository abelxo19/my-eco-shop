import React, { useState } from 'react';
import { Product } from '@/types';

interface ProductFormProps {
  category: string;
  onAdd: (category: string, newProduct: Product) => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ category, onAdd }) => {
  const [formData, setFormData] = useState<Partial<Product>>({
    name: '',
    price: 0,
    description: '',
    rating: 0,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.price) {
      const newProduct: Product = {
        id: Date.now(),
        name: formData.name as string,
        price: parseFloat(formData.price as unknown as string),
        description: formData.description as string,
        imageUrl: '/images/default.jpg', // Default image if you don't have image upload
        rating: parseInt(formData.rating as unknown as string, 10),
      };
      onAdd(category, newProduct);
      setFormData({
        name: '',
        price: 0,
        description: '',
        rating: 0,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Add New Product to {category}</h3>
      <input
        type="text"
        name="name"
        placeholder="Product Name"
        value={formData.name || ''}
        onChange={handleInputChange}
        required
      />
      <input
        type="number"
        name="price"
        placeholder="Product Price"
        value={formData.price?.toString() || ''}
        onChange={handleInputChange}
        required
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description || ''}
        onChange={handleInputChange}
      />
      <input
        type="number"
        name="rating"
        placeholder="Rating"
        value={formData.rating?.toString() || ''}
        onChange={handleInputChange}
        max={5}
        min={1}
      />
      <button type="submit">Add Product</button>
    </form>
  );
};

export default ProductForm;
