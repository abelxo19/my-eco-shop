'use server'

import Product from '@/models/product'

const addProduct = async product => {
	const name = product.get('name')
	const price = product.get('price')
	const imageUrl = product.get('imageUrl')
	const description = product.get('description')
	const rating = product.get('rating')

	const newProduct = new Product({name,price,imageUrl,description,rating })
	return newProduct.save()
}

const getProduct = async () => {
	return Product.find()
}

export { addProduct, getProduct }