import Image from 'next/image'

function CartCard() {
  return (
    <div className="py-8 bg-gray-100">
      <div className="container px-4 mx-auto">
        <h1 className="mb-4 text-2xl font-semibold">Shopping Cart</h1>
        <div className="flex flex-col gap-4 md:flex-row">
          <div className="md:w-3/4">
            <div className="p-6 mb-4 bg-white rounded-lg shadow-md">
              <table className="w-full">
                <thead>
                  <tr>
                    <th className="font-semibold text-left">Product</th>
                    <th className="font-semibold text-left">Price</th>
                    <th className="font-semibold text-left">Quantity</th>
                    <th className="font-semibold text-left">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-4">
                      <div className="flex items-center">
                        <div className="w-16 h-16 mr-4">
                          <Image 
                            src="https://dummyimage.com/200x200/dbdbdb/524f52.png" 
                            alt="Image 200x200"
                            width={500}
                            height={500}
                            priority={true}
                          />
                        </div>
                        <span className="font-semibold">Product name</span>
                      </div>
                    </td>
                    <td className="py-4">$</td>
                    <td className="py-4">
                      <div className="flex items-center">
                        <button className="px-4 py-2 mr-2 border rounded-md">-</button>
                        <span className="w-8 text-center">1</span>
                        <button className="px-4 py-2 ml-2 border rounded-md">+</button>
                      </div>
                    </td>
                    <td className="py-4">$</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="md:w-1/4">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <h2 className="mb-4 text-lg font-semibold">Summary</h2>
              <div className="flex justify-between mb-2">
                <span>Subtotal</span>
                <span>$</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Taxes</span>
                <span>$</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>Shipping</span>
                <span>$</span>
              </div>
              <hr className="my-2"/>
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">$</span>
              </div>
              <button className="w-full px-4 py-2 mt-4 text-white bg-blue-500 rounded-lg">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartCard
