"use client";
import { useContext, useEffect, useRef, useState } from "react";
import ProductCard from "./productCard";
import {
  arrayUnion,
  collection,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db, auth } from "../../firebase.config";
import { useUserStore } from "./userGeneration";
import { useAuthState } from "react-firebase-hooks/auth";
import { Product } from "../../types";
import ProductCarousel from "./productCarousel";
import { UserContext } from "./layout";






const productss = [
  {
    price: 39.99,
    category: "pants",
    id: 1,
    title: "Skinny Black Jeans 0",
    section: "men",
    sec_img:
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F11.jpg?alt=media&token=885b74f8-ea63-448b-a66c-97c86125b04e",
    alt_images: [
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F7.jpg?alt=media&token=ab5c70f8-3e4f-476a-bf4b-df21652e1244",
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F12.jpg?alt=media&token=162e4d6f-a3d4-4443-b9e0-cdc5f7c0444a",
    ],
    main_img:
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F10.jpg?alt=media&token=67d37592-6d61-4207-8556-13181449b2e2",
    color: "black",
    img_path: "",
  },

  {
    price: 39.99,
    category: "pants",
    id: 2,
    title: "Skinny Black Jeans 1",
    section: "men",
    sec_img:
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F11.jpg?alt=media&token=885b74f8-ea63-448b-a66c-97c86125b04e",
    alt_images: [
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F7.jpg?alt=media&token=ab5c70f8-3e4f-476a-bf4b-df21652e1244",
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F12.jpg?alt=media&token=162e4d6f-a3d4-4443-b9e0-cdc5f7c0444a",
    ],
    main_img:
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F10.jpg?alt=media&token=67d37592-6d61-4207-8556-13181449b2e2",
    color: "black",
    img_path: "",
  },
  {
    price: 39.99,
    category: "pants",
    id: 3,
    title: "Skinny Black Jeans 2",
    section: "men",
    sec_img:
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F11.jpg?alt=media&token=885b74f8-ea63-448b-a66c-97c86125b04e",
    alt_images: [
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F7.jpg?alt=media&token=ab5c70f8-3e4f-476a-bf4b-df21652e1244",
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F12.jpg?alt=media&token=162e4d6f-a3d4-4443-b9e0-cdc5f7c0444a",
    ],
    main_img:
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F10.jpg?alt=media&token=67d37592-6d61-4207-8556-13181449b2e2",
    color: "black",
    img_path: "",
  },
  {
    price: 39.99,
    category: "pants",
    id: 4,
    title: "Skinny Black Jeans 3",
    section: "men",
    sec_img:
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F11.jpg?alt=media&token=885b74f8-ea63-448b-a66c-97c86125b04e",
    alt_images: [
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F7.jpg?alt=media&token=ab5c70f8-3e4f-476a-bf4b-df21652e1244",
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F12.jpg?alt=media&token=162e4d6f-a3d4-4443-b9e0-cdc5f7c0444a",
    ],
    main_img:
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F10.jpg?alt=media&token=67d37592-6d61-4207-8556-13181449b2e2",
    color: "black",
    img_path: "",
  },
  {
    price: 39.99,
    category: "pants",
    id: 5,
    title: "Skinny Black Jeans 4",
    section: "men",
    sec_img:
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F11.jpg?alt=media&token=885b74f8-ea63-448b-a66c-97c86125b04e",
    alt_images: [
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F7.jpg?alt=media&token=ab5c70f8-3e4f-476a-bf4b-df21652e1244",
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F12.jpg?alt=media&token=162e4d6f-a3d4-4443-b9e0-cdc5f7c0444a",
    ],
    main_img:
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F10.jpg?alt=media&token=67d37592-6d61-4207-8556-13181449b2e2",
    color: "black",
    img_path: "",
  },
  {
    price: 39.99,
    category: "pants",
    id: 6,
    title: "Skinny Black Jeans 5",
    section: "men",
    sec_img:
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F11.jpg?alt=media&token=885b74f8-ea63-448b-a66c-97c86125b04e",
    alt_images: [
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F7.jpg?alt=media&token=ab5c70f8-3e4f-476a-bf4b-df21652e1244",
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F12.jpg?alt=media&token=162e4d6f-a3d4-4443-b9e0-cdc5f7c0444a",
    ],
    main_img:
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F10.jpg?alt=media&token=67d37592-6d61-4207-8556-13181449b2e2",
    color: "black",
    img_path: "",
  },
  {
    price: 39.99,
    category: "pants",
    id: 7,
    title: "Skinny Black Jeans 6",
    section: "men",
    sec_img:
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F11.jpg?alt=media&token=885b74f8-ea63-448b-a66c-97c86125b04e",
    alt_images: [
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F7.jpg?alt=media&token=ab5c70f8-3e4f-476a-bf4b-df21652e1244",
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F12.jpg?alt=media&token=162e4d6f-a3d4-4443-b9e0-cdc5f7c0444a",
    ],
    main_img:
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F10.jpg?alt=media&token=67d37592-6d61-4207-8556-13181449b2e2",
    color: "black",
    img_path: "",
  },

  {
    price: 39.99,
    category: "pants",
    id: 8,
    title: "Skinny Black Jeans 7",
    section: "men",
    sec_img:
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F11.jpg?alt=media&token=885b74f8-ea63-448b-a66c-97c86125b04e",
    alt_images: [
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F7.jpg?alt=media&token=ab5c70f8-3e4f-476a-bf4b-df21652e1244",
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F12.jpg?alt=media&token=162e4d6f-a3d4-4443-b9e0-cdc5f7c0444a",
    ],
    main_img:
      "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F10.jpg?alt=media&token=67d37592-6d61-4207-8556-13181449b2e2",
    color: "black",
    img_path: "",
  },
];


interface Props {
  currProduct: Product | null;
}

export default function RecentlyViewedCarousel({ currProduct }: Props) {
  const [products, setProducts] = useState([]);
  //const [user, loading, error] = useAuthState(auth);
  const { userObj, setUserObj } = useContext(UserContext);

  // fetch recently viewed products from user on firebase
  const [scrollIndex, setScrollIndex] = useState<number>(0);

  // width of the carousel on current screen
  const width = 3;
  const ref = useRef<null | HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>();


  useEffect(() => {
    if (userObj) {}
    const getRecentlyViewed = async (uid: string, currProduct: Product) => {

        const userSnapshot = await getDoc(doc(db, "users", uid));
        if (userSnapshot) {
          const userDoc = userSnapshot.data();
          var recentlyViewed = [...userDoc.recently_viewed];
          console.log('recentlyViewed', recentlyViewed)
          if (currProduct && !recentlyViewed.find((p) => p.id === currProduct.id)) {
            if (recentlyViewed.length > 10) {
              recentlyViewed.shift();
            }
            recentlyViewed.push(currProduct);
            recentlyViewed.reverse()
    
          setProducts(recentlyViewed)
          await updateDoc(doc(db, "users", uid), {
            recently_viewed: recentlyViewed,
          })}
    }}
      
    
    try {
      getRecentlyViewed(userObj.uid, currProduct)
    } catch (e) {
      console.log('error', e)
    }

  }, [])

useEffect(() => {

}, [products, setProducts])

  const handleButtonForward = () => {
    //setLeftIndexBound(leftIndexBound + width)
    //setRightIndexBound(rightIndexBound + width)
    containerRef.current.scrollLeft += containerRef.current.clientWidth;
    setScrollIndex(() => scrollIndex + width);
    ref.current[scrollIndex + width].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  const handleButtonBack = () => {
    //setLeftIndexBound(leftIndexBound - width)
    //setRightIndexBound(rightIndexBound - width)
    setScrollIndex(() => scrollIndex - width);
    containerRef.current.scrollLeft -= containerRef.current.clientWidth;
    ref.current[scrollIndex - width].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  };

  return (
    <div className="w-full px-4 mb-8">
      <div className="relative flex w-full h-fit justify-center items-center">
        <button
          onClick={handleButtonBack}
          className={
            scrollIndex - width >= products.length
              ? "absolute -left-16 top-50 z-20 text-indigo-800 border border-indigo-600 hover:bg-indigo-400 transition-all ease-linear duration-100 p-2 cursor-pointer mx-2 bg-indigo-300 border-b-2 border-b-indigo-800 rounded-full"
              : "absolute -left-16 top-50 z-20 border border-slate-600 transition-all ease-linear duration-100 p-2 pointer-events-none mx-2 bg-slate-400 border-b-slate-800 rounded-full"
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <div
          ref={containerRef}
          className="no-scrollbar overflow-x-auto flex justify-start"
        >
          {userObj ? (products.length > 0 ? products.map((p, index) =>
          (<div
            key={p.id}
          >
            <ProductCard {...p}></ProductCard>
          </div>)
          )
            : (<div className="flex-col w-full h-full justify-center items-center">
                <h4>Get started by browsing a department</h4>
                <div className="flex">
                  <button>Men</button>
                  <button>Women</button>
                </div>
                <h5>Recently viewed items will show up here</h5>
              </div>))
            : (<div className="w-full h-full ">
                <div className="flex justify-center items-center">
                  <h4>Login to see your recently viewed items!</h4>
                  <div>
                    <button>
                      Login
                    </button>
                    <button>
                      Signup
                    </button>
                  </div>
                </div>
            </div>)}
        <button
          onClick={handleButtonForward}
          className={
            scrollIndex + width < products.length
              ? "absolute -right-16 top-50 z-20 text-indigo-800 border border-indigo-600 hover:bg-indigo-400 transition-all ease-linear duration-100 p-2 cursor-pointer mx-2 bg-indigo-300 border-b-2 border-b-indigo-800 rounded-full"
              : "absolute -right-16 top-50 z-20 border border-slate-600 transition-all ease-linear duration-100 p-2 pointer-events-none mx-2 bg-slate-400 border-b-slate-800 rounded-full"
          }
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
