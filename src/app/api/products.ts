import type { NextApiRequest, NextApiResponse } from 'next'
import dbConnect from '@/lib/dbConnect'
import { addProduct } from '@/actions/action'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    await dbConnect()
    
    try {
      const productData = req.body
      const newProduct = await addProduct(productData)
      return res.status(201).json(newProduct)
    } catch (error) {
      return res.status(500).json({ error: 'Failed to add product' })
    }
  } else {
    return res.status(405).json({ error: 'Method not allowed' })
  }
}
