import { IProduct } from "@/types"
import { productsToPreLoad } from "@/utils/preLoadData"


// esta es la forma de hacerla con async/await
async function getProductsDB() {
  const res = await fetch("http://localhost:3001/products")
  const products: IProduct[] = await res.json()
  return products
}

//Aqui estoy haciendo una petción al backend para tomar todos los productos y setearle las imagenes que harcodie en utils. 

async function getProducts() {
  const productsDB = await getProductsDB()
  const products = productsDB.map((product, index) => {
    return {
      ...product,
      image: productsToPreLoad[index].image,
    }
  })
  return products
}

//Aqui hago una peiticio al backend de los productos con la imagen ya harcoedeada y lo que hago es que para las paginas dimamicas solo se muestre el producto por id.

async function getProductById(id: string) {
  const products = await getProducts();
  const product = products.find((product) => product.id.toString() === id)
  if (!product) throw new Error('Product Not Found')
  return product
} 

export {
  getProducts,
  getProductById
}

//Esta es la forma sencilla como una Promesa
// function getProductsDB(){
//   fetch ("http://localhost:3001")
//   .then(res => res.json())
// }
