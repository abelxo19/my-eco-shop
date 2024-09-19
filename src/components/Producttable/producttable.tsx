import React, { useState } from 'react';
import { Product } from '@/types';

interface ProductTableProps {
  category: string;
  products: Product[];
  onUpdate: (category: string, updatedProduct: Product) => void;
  onDelete: (category: string, id: number) => void;
}

const ProductTable: React.FC<ProductTableProps> = ({
  category,
  products,
  onUpdate,
  onDelete,
}) => {
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [editProductData, setEditProductData] = useState<Partial<Product>>({});

  // Handle edit input change
  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditProductData((prev) => ({ ...prev, [name]: value }));
  };

  // Save the updated product
  const saveEdit = (id: number) => {
    if (editingProduct) {
      onUpdate(category, { ...editingProduct, ...editProductData });
      setEditingProduct(null);
    }
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
          <th>Description</th>
          <th>Rating</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => (
          <tr key={product.id}>
            <td>
              {editingProduct?.id === product.id ? (
                <input
                  name="name"
                  value={editProductData.name || product.name}
                  onChange={handleEditChange}
                />
              ) : (
                product.name
              )}
            </td>
            <td>
              {editingProduct?.id === product.id ? (
                <input
                  name="price"
                  value={editProductData.price?.toString() || product.price.toString()}
                  onChange={handleEditChange}
                />
              ) : (
                `$${product.price}`
              )}
            </td>
            <td>
              {editingProduct?.id === product.id ? (
                <input
                  name="description"
                  value={editProductData.description || product.description}
                  onChange={handleEditChange}
                />
              ) : (
                product.description
              )}
            </td>
            <td>{product.rating}</td>
            <td>
              {editingProduct?.id === product.id ? (
                <>
                  <button onClick={() => saveEdit(product.id)}>Save</button>
                  <button onClick={() => setEditingProduct(null)}>Cancel</button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => {
                      setEditingProduct(product);
                      setEditProductData(product);
                    }}
                  >
                    Edit
                  </button>
                  <button onClick={() => onDelete(category, product.id)}>Delete</button>
                </>
              )}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ProductTable;
