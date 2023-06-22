
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../../../../firebase.config";
import Image from "next/image";
import AddProduct from "./addProduct";
import ImageCarousel from "./imageCarousel";


async function getProduct(productId: string) {
  const docRef = doc(db, "men", productId);
  const query = await getDoc(docRef);
  return query.data();
}


export default async function ProductPage({ params }: any) {
  const product = (await getProduct(params.id)) || {};
  const images = [product.main_img, product.sec_img, ...product.alt_images ]
  return (
    <div className="w-full h-full bg-gradient-to-t from-indigo-200 to-indigo-50 flex justify-center">
      <h2 className="ml-8">Men {product.category}</h2>
      <div className="w-full max-w-4xl flex justify-between p-8">
       <ImageCarousel product={product} imageUrls={images}>

       </ImageCarousel>
       
        <div>
          <h1 className="text-xl font-semibold">{product.title}</h1>
          <h2 className="text-lg font-medium my-1">${product.price}</h2>
          <AddProduct currProduct={product}></AddProduct>
        </div>
      </div>
    </div>
  );
}
