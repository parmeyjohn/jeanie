
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../../../../firebase.config";
import AddProduct from "./addProduct";
import ImageCarousel from "./imageCarousel";
import EmailSignUp from "@/app/emailSignUp";
import { Product } from "../../../../../types";
import ProductCarousel from "@/app/productCarousel";


async function getProduct(productId: string) {
  const docRef = doc(db, "men", productId);
  const query = await getDoc(docRef);
  return query.data();
}


export default async function ProductPage({ params }: any) {
  const product = (await getProduct(params.id)) || {};
  const images = [product.main_img, product.sec_img, ...product.alt_images];
  return (
    <div className="w-full h-screen overflow-y-auto bg-gradient-to-t from-indigo-200 to-indigo-50">
      <div className="max-w-4xl mx-auto">
        <h2 className=" p-4">Men {product.category}</h2>
        <div className="flex justify-between">
        <div className="w-full max-w-4xl flex justify-between p-8">
          <ImageCarousel
            product={product as Product}
            imageUrls={images}
            mainImg={product.main_img}
          ></ImageCarousel>
          <div>
            <h1 className="text-xl font-semibold">{product.title}</h1>
            <h2 className="text-lg font-medium my-1">${product.price}</h2>
            <AddProduct currProduct={product}></AddProduct>
          </div>
        </div>
        </div>
        <EmailSignUp></EmailSignUp>
        <ProductCarousel title='Recently Viewed'></ProductCarousel>
      </div>
    </div>
  );
}
