import { IOrderUser } from '@/types'
import Image from 'next/image'
import Link from 'next/link'

const DashboardCard: React.FC<IOrderUser> = ({ id, status, date }): React.ReactElement => {

  const originalDate = date;
  const formattedDate = formatDate(originalDate);

  function formatDate(dateString: string) {
    const date = new Date(dateString);

    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = String(date.getFullYear()).slice(2);

    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    return `${day}-${month}-${year} ${hours}:${minutes}`;
  }

  return (
    <section className="font-sans text-gray-600 body-font sm:flex-col">
      <div className="container px-1 py-4 mx-auto">
        <div className="flex m-4 ">
          <div className="p-6 bg-gray-100 rounded-lg">
            <div className="mx-4 my-4 bg-white rounded-xl max-sm:justify-cente" style={{ width: '300px', height: '300px' }}>
              <Image
                src="https://cdn.shopify.com/s/files/1/0070/7032/files/ecommerce_20shopping_20cart.png?v=1689527835"
                alt="shopping cart"
                width={500}
                height={500}
                className="object-cover w-full h-full"
              />
            </div>
            <h3
              className="text-xs font-medium tracking-widest text-[#3F375C] italic">
              Order: # {id}
            </h3>
            <h2
              className="flex mb-4 text-xl font-semibold text-[#3F375C]">
              Status: <p className='italic mx-3 text-[#3F375C] text-lg font-normal'>{status}</p>
            </h2>
            <h2
              className="flex mb-4 text-xl font-semibold text-[#3F375C]">
              Date: <p className='italic mx-3 text-[#3F375C] text-lg font-normal'>{formattedDate}</p>
            </h2>
            <Link href={`/dashboard/${id}`}>
              <button
                className="font-semibold text-center uppercase transition-all disabled:pointer-events text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/30 block w-full bg-[#3F375C] text-[#D9CAB3] hover:scale-105"
                type="button">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DashboardCard

// hacer que la fecha tenga otro formato, solo dia, mes y año y la hora sea formato 24h
