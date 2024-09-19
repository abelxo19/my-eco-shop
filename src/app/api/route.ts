import { NextResponse } from 'next/server'
import dbConnect from '@/lib/dbConnect'
import Product from '@/models/product'

export const GET = async () => {
	await dbConnect()
	const data = await Product.find()

	return NextResponse.json(data)
}