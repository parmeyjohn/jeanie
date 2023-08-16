"use client";
import { useEffect, useRef, useState } from "react";
import ProductCard from "./productCard";
import { arrayUnion, collection, doc, getDoc, updateDoc } from "firebase/firestore";
import { db, auth } from "../../firebase.config";
import { useUserStore } from "./userGeneration";
import { useAuthState } from "react-firebase-hooks/auth";
import { Product } from "../../types";
import ProductCarousel from "./productCarousel";

interface Props {
  currProduct: Product | null;
}

export default async function RecentlyViewedCarousel({ currProduct }: Props) {
  const [products, setProducts] = useState<Array<Product>>([]);
  useEffect(() => {
    const getRecentlyViewed = async (uid: string) => {
      const userSnapshot = await getDoc(doc(db, "users", uid));
      if (userSnapshot) {
        const userDoc = userSnapshot.data();
        var recentlyViewed = [...userDoc.recently_viewed]
        console.log(currProduct)
        console.log(recentlyViewed.find(p => p.id === currProduct.id))
        if ( currProduct && !recentlyViewed.find(p => p.id === currProduct.id)) {
            if (recentlyViewed.length > 10) {
                recentlyViewed.shift()
            }
            recentlyViewed.push(currProduct)
            console.log('its not here yet', recentlyViewed)
            await updateDoc(doc(db, 'users', uid), {
                recently_viewed: recentlyViewed
              });

        }
        setProducts([...recentlyViewed]);
      }
    };
    if (auth?.currentUser) {
      console.log("uid", auth?.currentUser.uid);
      getRecentlyViewed(auth.currentUser.uid);
    }
  }, [auth?.currentUser]);

  return <ProductCarousel products={products}></ProductCarousel>;
}
