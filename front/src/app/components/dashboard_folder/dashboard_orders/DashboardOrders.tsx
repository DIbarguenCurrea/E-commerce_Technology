import { IOrderUser } from '@/types'
import DashboardCard from '../dashboard_card/DashboardCard'


function DashboardOrders( { orders }: { orders: IOrderUser[]}) {

  return (
    <div className='flex justify-center gap-5 max-sm:flex-col'>
      {orders.map((order) => (
        <DashboardCard key={order.id} {...order}/> 
      ))}
    </div>
  )
}

export default DashboardOrders