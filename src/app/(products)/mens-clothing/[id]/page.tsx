import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../../../../firebase.config";
import Image from "next/image";
import AddProduct from "./addProduct";

async function getProduct(productId: string) {
  const docRef = doc(db, "men", productId);
  const query = await getDoc(docRef);
  return query.data();
}

function submitProductForm(e: any) {
  e.preventDefault();
}

export default async function ProductPage({ params }: any) {
  const product = (await getProduct(params.id)) || {};

  return (
    <div className="w-full h-full bg-gradient-to-t from-indigo-200 to-indigo-100 flex justify-center">
      <div className="w-full max-w-4xl flex justify-between p-8">
        <div className="flex">
          <div className="relative w-80 h-80">
            {
              <Image
                className="rounded-t-xl w-10 h-10"
                fill={true}
                src={product.main_img}
                alt={product.title}
              ></Image>
            }
          </div>
          <div className="flex flex-col justify-start">
            {product.alt_images.map((img: string, i: any) => (
              <div key={i} className="relative w-20 h-20">
                <Image
                  className=""
                  fill={true}
                  src={img}
                  alt={`${product.title} alt image ${i + 1}`}
                ></Image>
              </div>
            ))}
          </div>
        </div>
        <div>
          <h1 className="text-xl font-semibold">{product.title}</h1>
          <h2 className="text-lg font-medium">${product.price}</h2>
          <AddProduct></AddProduct>
        </div>
      </div>
    </div>
  );
}
