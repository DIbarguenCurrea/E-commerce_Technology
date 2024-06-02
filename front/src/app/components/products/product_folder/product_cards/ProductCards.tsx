// import { ProductCardsContainer } from './ProductCards.styles'
import ProductCard from '../product_card/ProductCard'
import { IProduct } from '@/types'

function ProductCards({ products }: { products: IProduct[] }) {

  return (
    <div className='flex flex-wrap justify-center gap-5'>
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  )
}

export default ProductCards