import { dbPool } from './conn'
import { JustProduct, Product } from '@/types/common'

async function seed() {
  const products: JustProduct[] = [
    {
      title: 'iPhone 15 Pro',
      price: 1_09_000_99,
      description: 'Latest Apple flagship smartphone with A17 Pro chip',
    },
    {
      title: 'Samsung Galaxy S24',
      price: 89_917_87,
      description: 'Feature-rich Android smartphone with AI capabilities',
    },
    {
      title: 'MacBook Air M2',
      price: 1_79_999_10,
      description: 'Thin and light laptop with Apple Silicon',
    },
    {
      title: 'iPad Air',
      price: 59_999_99,
      description: 'Versatile tablet for work and entertainment',
    },
    {
      title: 'AirPods Pro',
      price: 24_999_17,
      description: 'Wireless earbuds with active noise cancellation',
    },
  ] as const

  try {
    let res
    for (const product of products) {
      res = await dbPool.execute(
        'INSERT INTO product (title, price, description) VALUES (?, ?, ?)',
        [product.title, product.price, product.description]
      )
    }
    return res
  } catch (error) {
    console.error('Error seeding data:', error)
    throw error
  }
}

async function getProducts(limit: number = 10) {
  try {
    const query = `select * from product limit ${limit}`
    const [rows] = await dbPool.query(query)
    return rows as Product[]
  } catch (err) {
    console.error('Error in get products', err)
    throw err
  }
}

async function getProductById(id: number) {
  try {
    const query = `select * from product where id=?`
    const [rows] = await dbPool.execute(query, [id])
    return rows
  } catch (err) {
    console.error('Error in get products', err)
    throw err
  }
}

async function addProduct(product: Product) {
  try {
    await dbPool.execute('insert into product values (?, ?, ?)', [
      product.title,
      product.price,
      product.description,
    ])
  } catch (err) {
    console.error('Could not add product', err)
    throw err
  }
}

async function updateProductById(
  id: number,
  title?: string,
  price?: number,
  description?: string
) {
  try {
    await dbPool.execute(
      'update product set title=?,  price=?, description=? where id = ?',
      [title, price, description, id]
    )
  } catch (err) {
    console.error('Could not add product', err)
    throw err
  }
}

export { seed, getProducts, getProductById, addProduct, updateProductById }
