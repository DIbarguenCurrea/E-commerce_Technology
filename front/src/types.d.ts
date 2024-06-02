export interface IUser {
  id: number;
  name: string;
  email: string;
  address: string;
  phone: string;
  role: 'admin' | 'user'
}

export interface IProduct {
  id?: number | undefined;
  name: string;
  description: string;
  price: number;
  stock: number;
  image: string;
  categoryId: number;
}

export interface ICategory {
  id?: number;
  name: string; 
  image: string;
}

export interface IOrderUser {
  id: number;
  status: 'approved' | 'pending' | 'rejected';
  date: string;
  products: IProduct[];
}

export interface IOrder {
  status: 'approved' | 'pending' | 'rejected';
  date: string;
  user:IUser;
  products:IProduct[];
  id:number
}

export interface IUserLogin {
  email: string,
  password: string
}

export interface IUserRegister {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
}

export interface RegisterErrorProps {
  name: string;
  email: string;
  password: string;
  address: string;
  phone: string;
}

export interface LoginErrorProps {
  email: string;
  password: string;
}