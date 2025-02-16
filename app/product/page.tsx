import { getProducts } from '@/db/query'
import { Product } from '@/types/common'
import { toRupees } from '@/db/utiltiy'
async function ProductDBPage() {
  const products: Product[] = await getProducts()
  return (
    <ul className='space-y-4 p-4'>
      {products.map((product) => (
        <li
          key={product.id}
          className='p-4 rounded-lg bg-gray-950 text-gray-400'
        >
          <h2 className='text-xl font-semibold'>{product.title}</h2>
          <h3>{toRupees(product.price)}</h3>
          <p>{product.description}</p>
        </li>
      ))}
    </ul>
  )
}

export default ProductDBPage
