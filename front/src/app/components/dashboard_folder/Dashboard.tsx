'use client'
import React from 'react'
import { GetOrdersDB } from '@/helpers/Helpers_Orders'
import DashboardOrders from './dashboard_orders/DashboardOrders';
import { IOrderUser } from '@/types';
import Link from 'next/link';

// eslint-disable-next-line @next/next/no-async-client-component
async function Dashboard() {
  const usertoken = localStorage?.getItem('token') || null;

  try {
    const orders: IOrderUser[] = await GetOrdersDB(usertoken);

    return (
      <div className="p-4 font-sans">

        <div className="w-full mb-6 lg:w-1/2 lg:mb-0">
          <h1 className="mb-2 text-2xl font-medium text-[#3F375C] sm:text-3xl title-font">
            Summary of your purchases
          </h1>
          <div
            className="w-20 h-1 bg-[#BC8034] rounded">
          </div>

        </div>
        <div className='flex justify-end max-sm:justify-center'>
          <Link href='/products'>
            <button
              className="text-center uppercase transition-all disabled:opacity-50 disabled:pointer-events text-xs py-3 px-6 my-8 mx-10 rounded-lg w-50 bg-[#3F375C] text-white hover:bg-[#BC8034]"
              type="button">
              Go back
            </button>
          </Link>
        </div>
        {orders.length > 0 ? (
          <DashboardOrders orders={orders} />
        )
          : (
            <div className='flex justify-center px-24 py-24'>
              <p className='text-5xl text-[#3F375C] max-sm:flex-col'>You don´t have any orders yet. Start shopping!</p>
            </div>
          )}
      </div>
    );
  } catch (error) {
    return (
      <div className="p-4">
        <p>Error retrieving orders</p>
      </div>

    );
  }

}

export default Dashboard