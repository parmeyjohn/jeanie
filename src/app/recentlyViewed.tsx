import Image from "next/image";
import { Product } from "../../types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db, auth } from "../../firebase.config";
import ProductCard from "./productCard";
import ProductCarousel from "./productCarousel";

const getRecentlyViewed = async (uid: string) => {
  const userSnapshot = await getDoc(doc(db, "users", uid));
  if (userSnapshot) {
    const userDoc = userSnapshot.data();
    var recentlyViewed = [...userDoc.recently_viewed];
    console.log("recent viewed", recentlyViewed);
    return recentlyViewed;
  } else {
    return [];
  }
};

export default async function RecentlyViewed() {
  var recentlyViewed = [];
  console.log('in here', auth)
  if (auth?.currentUser) {
    console.log("uid", auth?.currentUser.uid);
    recentlyViewed = await getRecentlyViewed(auth.currentUser.uid);
  }

  return (<ProductCarousel products={recentlyViewed}></ProductCarousel>);
}
