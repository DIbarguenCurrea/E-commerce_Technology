import { getProductById } from '@/helpers/Helpers_Products'
import Image from 'next/image';
import Link from 'next/link';

async function ProductDetail({ params }: { params: any }) {

  const { slug } = params
  const { name, price, description, image } = await getProductById(slug);

  return (
    <div className='container font-sans text-[#3F375C]'>
      <h1 className='mx-4 my-4 text-3xl'>Product Detail</h1>
      <div className='flex max-sm:flex-col'>
        <div className='mx-4 my-4 bg-white rounded-xl max-sm:justify-center'>
          <div className="mx-4 mt-4" style={{ width: '300px', height: '300px' }}>
            <Image
              src={image}
              alt={name}
              width={500}
              height={500}
              className="object-cover w-full h-full" />
          </div>
        </div>
        <div className='relative flex flex-col'>
          <h2 className='mx-4 my-4 text-5xl font-bold'>{name}
            <p className='text-[#BC8034] text-2xl font-semibold'>
              {price} €
            </p>
          </h2>
          <p className='text-xl text-center md:px-4'>{description}</p>
          <div className='flex justify-end mt-20 max-sm:justify-center'>
            <Link href='/products'>
              <button
                className="text-center uppercase transition-all disabled:opacity-50 disabled:pointer-events text-xs py-3 px-6 my-8 mx-10 rounded-lg w-50 bg-[#3F375C] text-white hover:bg-[#BC8034]"
                type="button">
                Go back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail