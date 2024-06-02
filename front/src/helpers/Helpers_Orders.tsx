import { IOrderUser } from "@/types";
import axios from "axios";

const API_URL_GET_ORDERS = process.env.NEXT_PUBLIC_API_URL


async function GetOrdersDB (usertoken: string | null): Promise<IOrderUser[]> {
  
  if (!usertoken) {
    throw new Error('User token not found. Log in to view your orders.');
  } else if (!API_URL_GET_ORDERS) {
    throw new Error('API URL not configured. Check your environment variables.');
  }

  try{

    const response = await axios.get(`${API_URL_GET_ORDERS}users/orders`, {
      headers: {
        Authorization: usertoken
      }
    });
    // console.log(response.data)
    return response.data    
  }catch(error){
    console.error('Error al recuperar pedidos:', error);
    return [];
  }
};

async function  getOrders() {
  const ordersDB: IOrderUser[] = await GetOrdersDB()
  const orders = ordersDB
  return orders
}

async function getProductOrdersById(id: string) {
  
    const orders = await getOrders();
    const order = orders.find((order) => order.id.toString() === id)
    // console.log(order)
    if (!order) throw new Error('Order Not Found')
    return order
}

export {
  getOrders,
  GetOrdersDB,
  getProductOrdersById
};