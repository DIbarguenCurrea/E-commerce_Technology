'use client'
import Image from 'next/image';
import { GetOrdersDB } from '@/helpers/Helpers_Orders';
import { IOrderUser } from '@/types';
import { getProducts } from '@/helpers/Helpers_Products';
import Link from 'next/link';


const OrderDetails = async ({ params }: { params: { slug: string } }) => {

  const usertoken = localStorage?.getItem('token') || null
  const orders: IOrderUser[] = await GetOrdersDB(usertoken)
  const products = await getProducts()
  const order = orders.find((order) => order.id === parseInt(params.slug))
  const product = products?.filter((product) => order?.products.some((orderProduct) => orderProduct.id === product.id))

  const totalPrice = product?.reduce((total, product) => {
    return total + (product.price || 0);
  }, 0);

  const formattedPrice = totalPrice.toLocaleString('es-Es', {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
  })

  return (
    <div className='container flex-col font-sans'>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7'>
        {product?.map((products) => (
          <div key={products.id}
            className='container text-[#3F375C] mx-4 my-4 flex max-sm:flex-col'>
            <div className='flex max-sm:flex-col'>
              <div className='mx-4 my-4 bg-white rounded-xl max-sm:justify-center'>
                <div className="mx-3 mt-3" style={{ width: '300px', height: '300px' }}>
                  <Image
                    src={products.image}
                    alt={products.name}
                    width={500}
                    height={500}
                    
                    className="object-cover w-full h-full" />
                </div>
                <div className='relative flex flex-col'>
                  <h2 className='mx-4 my-4 text-xl font-bold'>{products.name}
                    <p className='text-[#BC8034] text-2xl font-semibold'>
                      {products.price} €
                    </p>
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className='flex'>
        <div className='flex mt-4 mr-32 max-sm:justify-center'>
          <Link href='/dashboard'>
            <button
              className="text-center uppercase transition-all disabled:opacity-50 disabled:pointer-events text-xs py-3 px-6 my-8 mx-10 rounded-lg w-50 bg-[#3F375C] text-white hover:bg-[#BC8034]"
              type="button">
              Go back
            </button>
          </Link>
        </div>
        <div
          className="justify-end mt-4 mr-32 max-sm:justify-center">
          <p className='flex text-[#3F375C] text-xl font-semibold'>
            Total Price:
            <p className='px-2 text-lg italic font-normal'>
              {formattedPrice}
            </p>
          </p>
        </div>
      </div>
    </div>
  );
}

export default OrderDetails