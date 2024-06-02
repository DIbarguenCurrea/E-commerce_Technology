import ProductCards from './product_folder/product_cards/ProductCards'
import { getProducts } from '@/helpers/Helpers_Products'

async function Products() {

  const products = await getProducts()

  return (
    <div className='p-4'>
      <h1 className="text-4xl font-semibold text-[#3F375C]">
        Products
      </h1>
      <ProductCards products={products} />
    </div>
  )
}

export default Products