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
        <div className="flex justify-between mb-8">
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
              <div className="mt-8 mb-6">
                <div className="flex justify-start mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 p-1 mr-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12"
                    />
                  </svg>
                  <div>
                    <p className="font-semibold text-sm">
                      Free Shipping Over $75
                    </p>
                    <p className="text-sm">Arrival estimate at checkout</p>
                  </div>
                </div>
                <div className="flex justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 p-1 mr-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13.5 21v-7.5a.75.75 0 01.75-.75h3a.75.75 0 01.75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349m-16.5 11.65V9.35m0 0a3.001 3.001 0 003.75-.615A2.993 2.993 0 009.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 002.25 1.016c.896 0 1.7-.393 2.25-1.016a3.001 3.001 0 003.75.614m-16.5 0a3.004 3.004 0 01-.621-4.72L4.318 3.44A1.5 1.5 0 015.378 3h13.243a1.5 1.5 0 011.06.44l1.19 1.189a3 3 0 01-.621 4.72m-13.5 8.65h3.75a.75.75 0 00.75-.75V13.5a.75.75 0 00-.75-.75H6.75a.75.75 0 00-.75.75v3.75c0 .415.336.75.75.75z"
                    />
                  </svg>

                  <div>
                    <p className="font-semibold text-sm">
                      Free In-store Pickup
                    </p>
                    <p className="text-sm">Save time and visit your store</p>
                  </div>
                </div>
              </div>

              <div className="text-sm border-t border-t-indigo-400 pt-6">
                <h3 className="font-semibold">Item info:</h3>
                <ul className="list-disc ml-6">
                  <li className="mb-1">75% Cotton</li>
                  <li className="mb-1">25% Polyester</li>
                  <li className="mb-1">Slim fit</li>
                  <li className="mb-1">Made in the USA</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <ProductCarousel title="Others Also Viewed"></ProductCarousel>
        <EmailSignUp></EmailSignUp>
        <ProductCarousel title="Recently Viewed"></ProductCarousel>
      </div>
    </div>
  );
}
