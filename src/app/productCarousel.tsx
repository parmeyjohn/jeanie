"use client";
import { useContext, useEffect, useRef, useState } from "react";
import ProductCard from "./productCard";
import { collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { db, auth } from "../../firebase.config";
import { Product } from "../../types";
import { UserContext } from "./layout";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaUser } from "react-icons/fa";
import Link from "next/link";
import LoadingProductCard from "./loadingProductCard";


interface Props {
  currProduct: Product | null;
}

export default function RecentlyViewedCarousel({ currProduct }: Props) {
  const [products, setProducts] = useState([]);
  const [scrollIndex, setScrollIndex] = useState(0);

  // width of the carousel on current screen
  const width = 3;
  const ref = useRef<null | HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>();


  useEffect(() => {
    const getObjects = async () => {
      const query = await getDocs(collection(db, "featured-items"));
      var productArray: Array<Product> = [];
      query.forEach((doc) => productArray.push(doc.data() as Product));
      console.log(productArray);
      setProducts(productArray);
    };
      
    try {
      getObjects()
    } catch (e) {
      console.log('error', e)
    }
  }, [])


  const handleButtonForward = () => {
    containerRef.current.scrollLeft += containerRef.current.clientWidth;
    setScrollIndex((prev) => prev + width);
  };

  const handleButtonBack = () => {
    containerRef.current.scrollLeft -= containerRef.current.clientWidth;
    setScrollIndex((prev) => prev - width);
  };

  return (
    <div className="w-full px-4 mb-8">
      <div className="relative flex w-full h-fit justify-start items-center">
        <button
          onClick={handleButtonBack}
          className={
            scrollIndex - width >= 0
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
          className="no-scrollbar overflow-x-auto flex justify-start snap-x w-full h-full"
        >
          {(products.length > 0) ? products.map((p, index) =>
          (<div
            key={p.id}
            className="snap-start"
          >
            <ProductCard {...p}></ProductCard>
          </div>)) : (
          <div className="no-scrollbar overflow-x-auto flex justify-start snap-x w-full h-full">
            <LoadingProductCard></LoadingProductCard>
            <LoadingProductCard></LoadingProductCard>
            <LoadingProductCard></LoadingProductCard>
            <LoadingProductCard></LoadingProductCard>
          </div>)
            }
      </div>
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
