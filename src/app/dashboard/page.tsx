import { getKindeServerSession } from '@kinde-oss/kinde-auth-nextjs/server'
import { notFound } from 'next/navigation'
import { addProduct,getProduct } from '@/actions/action'
import dbConnect from '@/lib/dbConnect'
const page =async() => {
  const { getUser } = getKindeServerSession()
  const user = await getUser()

  const ADMIN_EMAIL = process.env.ADMIN_EMAIL

  if (!user || user.email !== ADMIN_EMAIL) {
    return notFound()
  }
  await dbConnect()

	const product = await getProduct()

	console.log(product)
  return (
    <div className='mt-8'>
    <form onSubmit={addProduct}>
        <div>
            <label>Name</label>
            <input name='name' type='text' required />
        </div>
        <div>
            <label>Price</label>
            <input name='price' type='number' step='0.01' required />
        </div>
        <div>
            <label>Image URL</label>
            <input name='imageUrl' type='text' />
        </div>
        <div>
            <label>Description</label>
            <textarea name='description' />
        </div>
        <div>
            <label>Rating</label>
            <input name='rating' type='number' step='0.1' min='0' max='5' />
        </div>
        <button type='submit'>Submit</button>
    </form>
    </div>
);
}

export default page
