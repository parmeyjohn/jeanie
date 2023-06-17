import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../../../../firebase.config";
import Image from "next/image";

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
          <form>
            <div>
              <label htmlFor="quantity">Quantity:</label>
              <select name="quantity">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <button
              name="add-cart-button"
              className="flex items-center rounded-md text-indigo-100 border-b-2 border-indigo-800 shadow-lg bg-indigo-600 hover:bg-indigo-700 hover:shadow-md active:bg-indigo-800 active:shadow-sm transition-all duration-100 ease-in-out p-4"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <label htmlFor="add-cart-button">Add to cart</label>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
