import { IProduct } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

const ProductCard: React.FC<IProduct> = ({ id, name, image, price, }): React.ReactElement => {

  return (
    <div className="transition duration-300 transform scale-75 bg-white rounded-xl w-96 hover:scale-95 max-xl:hover:scale-75">
      <Link href={`/products/${id}`}>
        <div className="mx-3 mt-3 h-96">
          <Image
            src={image}
            alt={name}
            width={500}
            height={500}
            className="object-cover w-full h-full" />
        </div>
      </Link>
      <div className="mt-2 mb-2 font-sans text-center">
        <h2 className="block text-base antialiased font-medium leading-relaxed text-[#3F375C]">{name}</h2>
        <h3 className="block text-base antialiased font-medium leading-relaxed text-[#BC8034]"> {price} €</h3>
      </div>
      <div className="p-5">
        <button
          className="font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:pointer-events text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/30 block w-full bg-[#3F375C] text-[#D9CAB3] hover:scale-105"
          type="button">
          Add to Cart
        </button>
      </div>
    </div >
  )
}

export default ProductCard