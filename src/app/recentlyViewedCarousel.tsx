"use client";
import { useContext, useEffect, useRef, useState } from "react";
import ProductCard from "./productCard";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db, auth } from "../../firebase.config";
import { Product } from "../../types";
import { UserContext } from "./layout";
import { useAuthState } from "react-firebase-hooks/auth";

interface Props {
  currProduct: Product | null;
}

export default function RecentlyViewedCarousel({ currProduct }: Props) {
  const [products, setProducts] = useState([]);
  const [user, loading, error] = useAuthState(auth);

  // fetch recently viewed products from user on firebase
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
          })}
          setProducts(recentlyViewed)
    }}
      
    try {
      getRecentlyViewed(user.uid, currProduct)
    } catch (e) {
      console.log('error', e)
    }

  }}, [loading])

useEffect(() => {

}, [products, setProducts])

  const handleButtonForward = () => {
    //setLeftIndexBound(leftIndexBound + width)
    //setRightIndexBound(rightIndexBound + width)
    containerRef.current.scrollLeft += containerRef.current.clientWidth;
    setScrollIndex((prev) => prev + width);
    // ref.current[scrollIndex + width].scrollIntoView({
    //   behavior: "smooth",
    //   block: "nearest",
    //   inline: "start",
    // });
  };

  const handleButtonBack = () => {
    //setLeftIndexBound(leftIndexBound - width)
    //setRightIndexBound(rightIndexBound - width)
    containerRef.current.scrollLeft -= containerRef.current.clientWidth;
    setScrollIndex((prev) => prev - width);

    // ref.current[scrollIndex - width].scrollIntoView({
    //   behavior: "smooth",
    //   block: "nearest",
    //   inline: "start",
    // });
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
          className="no-scrollbar overflow-x-auto flex justify-start snap-x"
        >
          {user ? ((products.length > 0) ? products.map((p, index) =>
          (<div
            key={p.id}
            className="snap-start"
          >
            <ProductCard {...p}></ProductCard>
          </div>)
          )
            : (<div className="flex-col w-full h-80 justify-start items-center">
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
