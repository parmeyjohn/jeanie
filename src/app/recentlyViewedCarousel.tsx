"use client";
import { useContext, useEffect, useRef, useState } from "react";
import ProductCard from "./productCard";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db, auth } from "../../firebase.config";
import { Product } from "../../types";
import { UserContext } from "./layout";
import { useAuthState } from "react-firebase-hooks/auth";
import { FaUser } from "react-icons/fa";
import Link from "next/link";


interface Props {
  currProduct: Product | null;
}

export default function RecentlyViewedCarousel({ currProduct }: Props) {
  const [user, loading, error] = useAuthState(auth);
  const [products, setProducts] = useState([]);
  const [scrollIndex, setScrollIndex] = useState(0);

  // width of the carousel on current screen
  const width = 3;
  const ref = useRef<null | HTMLDivElement[]>([]);
  const containerRef = useRef<HTMLDivElement>();


  useEffect(() => {
    if (user) {
      const getRecentlyViewed = async (uid: string, currProduct: Product) => {
        const userSnapshot = await getDoc(doc(db, "users", uid));
        if (userSnapshot) {
          const userDoc = userSnapshot.data();
          var recentlyViewed = [...userDoc.recently_viewed];
          console.log('recentlyViewed', recentlyViewed)
          if (currProduct && !recentlyViewed.find((p) => p.id === currProduct.id)) {
            if (recentlyViewed.length >= 10) {
              recentlyViewed.shift();
            }
            recentlyViewed.unshift(currProduct);

            console.log('this is working')

            await updateDoc(doc(db, "users", uid), {
              recently_viewed: recentlyViewed,
            })
          }
          setProducts(recentlyViewed)
        }
      }

      try {
        getRecentlyViewed(user.uid, currProduct)
      } catch (e) {
        console.log('error', e)
      }

    }
  }, [loading])

  useEffect(() => {

  }, [products, setProducts])

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
          {user ? ((products.length > 0) ? products.map((p, index) =>
          (<div
            key={p.id}
            className="snap-start"
          >
            <ProductCard {...p}></ProductCard>
          </div>)
          )
            : (<div className="w-full h-80 flex justify-center items-center">
            <div className="w-fit h-fit">
              <h4 className="text-lg font-semibold text-center">You haven't viewed any items...</h4>
              <h3>Browse below and your recently viewed items will show up here!</h3>

              <div className="flex justify-center my-10">
                <Link
                  href="/mens-clothing">
                  <button className="w-32 mr-4 flex justify-center items-center cursor-pointer rounded-md text-indigo-50 border-b-2 border-indigo-800 shadow-md bg-indigo-600 hover:bg-indigo-700 hover:shadow-sm active:bg-indigo-800 active:shadow-xs transition-all duration-100 ease-in-out p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 ">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                    </svg>
                    Men
                  </button>
                </Link>
                <Link
                  href="/womens-clothing">
                  <button className="w-32 ml-4 flex justify-center items-center cursor-pointer rounded-md text-indigo-50 border-b-2 border-indigo-800 shadow-md bg-indigo-600 hover:bg-indigo-700 hover:shadow-sm active:bg-indigo-800 active:shadow-xs transition-all duration-100 ease-in-out p-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                    </svg>

                    Women
                  </button>
                </Link>
              </div>
            </div>
          </div>))
            : (<div className="w-full h-80 flex justify-center items-center">
              <div className="w-fit h-fit">
                <h4 className="text-lg font-semibold text-center">Sign in to see your recently viewed items!</h4>

                <div className="flex justify-center my-10">
                  <Link
                    href="/login">
                    <button className="w-32 mr-4 flex justify-center items-center cursor-pointer rounded-md text-indigo-50 border-b-2 border-indigo-800 shadow-md bg-indigo-600 hover:bg-indigo-700 hover:shadow-sm active:bg-indigo-800 active:shadow-xs transition-all duration-100 ease-in-out p-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
                      </svg>
                      Sign in
                    </button>
                  </Link>
                  <Link
                    href="/signup">
                    <button className="w-32 ml-4 flex justify-center items-center cursor-pointer rounded-md text-indigo-50 border-b-2 border-indigo-800 shadow-md bg-indigo-600 hover:bg-indigo-700 hover:shadow-sm active:bg-indigo-800 active:shadow-xs transition-all duration-100 ease-in-out p-4">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
                      </svg>

                      Sign up
                    </button>
                  </Link>
                </div>
              </div>
            </div>)}
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
