"use client";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { auth, storage, db } from "../../../../firebase.config";
import { doc, getDocs, collection } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import ProductCard from "../../productCard";
import { Product } from "../../../../types";
import Link from "next/link";
import LoadingProductCard from "@/app/loadingProductCard";

export default function MensClothing() {
  const [imgUrl, setImgUrl] = useState("");
  const [sorting, setSorting] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [productsLength, setProductsLength] = useState<number>(0);
  const [categories, setCategories] = useState<string[]>([]);
  const [currCategories, setCurrCategories] = useState<Set<string>>(new Set());


  useEffect(() => {
    //getImages().then((res) => setImgUrl(res))
    //console.log(productsRef)
    getObjects();
  }, []);


  useEffect(() => {
    setProductsLength(
      products.filter((p) =>
        currCategories.size > 0 ? currCategories.has(p.category) : p
      ).length
    );
  }, [currCategories]);

  const getObjects = async () => {
    const query = await getDocs(collection(db, "men"));
    var productArray: Array<Product> = [];
    query.forEach((doc) => productArray.push(doc.data() as Product));
    console.log(productArray);
    setProductsLength(productArray.length);
    setProducts(productArray.sort((a, b) => a.id - b.id));
    var m = new Set(productArray.map((p) => p.category));
    setCategories(Array.from(m.values()));
    console.log("categories", m);
  };

  const getImages = async () => {
    //TODO: plug in individual component file here
    const storageRef = ref(storage, "pants/men_pants");
    const files = await listAll(storageRef);
    const urlPromises = files.items.map((imageRef) => getDownloadURL(imageRef));
    const img = await urlPromises[0];
    setImgUrl(img);
    console.log("urlPromises");
    return urlPromises;
  };

  function sortProducts(e: any) {
    setSorting(e.target.text);
    if (e.target.value === "low-high") {
      setProducts([...products.sort((a, b) => a.price - b.price)]);
    } else if (e.target.value === "high-low") {
      setProducts([...products.sort((a, b) => b.price - a.price)]);
    } else if (e.target.value === "featured") {
      setProducts([...products.sort((a, b) => a.id - b.id)]);
    }
  }

  function handleCheck(e: any, c: string) {
    const newCategories = new Set(currCategories);
    if (e.target.checked) {
      newCategories.add(c);
    } else {
      newCategories.delete(c);
    }
    console.log(newCategories);
    setCurrCategories(newCategories);
  }

  return (
    <div className="w-full max-w-4xl mx-auto h-full">
      <div className="flex justify-between items-center ml-4">
        <div className="">
          <h1 className="text-lg font-medium mt-4">Men's Clothing:</h1>
          {productsLength > 0 ?
            <h2 className="ml-2 text-slate-500">{productsLength} products</h2>
            : <div className="ml-2 h-6 w-24 animate-pulse bg-indigo-400 rounded-md"></div>}

        </div>

        <div>
          <label htmlFor="sort-options">Sort:</label>
          <br></br>
          <select
            className="p-2 text-sm rounded-md outline-indigo-400 bg-transparent border border-indigo-400"
            value={sorting}
            onChange={(e) => sortProducts(e)}
            name="sort-options"
          >
            <option value="featured">Featured</option>
            <option value="high-low">Price: high to low</option>
            <option value="low-high">Price: low to high</option>
          </select>
        </div>
      </div>

      <div className=" border text-sm border-indigo-400 rounded-md h-40 w-36 p-4 -ml-40 absolute">
        <h3 className="text-sm font-medium">Browse:</h3>
        <div className="flex-col h-auto">
          {categories.length > 0 ?
            categories.map((c, i) => (
              <div className="flex items-center justify-start" key={i}>
                <input
                  className="m-2 ml-0 h-5 w-5 border border-indigo-500 cursor-pointer appearance-none rounded-md bg-slate-300  transition duration-300 ease-in-out checked:bg-indigo-400 focus:ring-2 focus:ring-indigo-600"
                  onChange={(e) => {
                    handleCheck(e, c);
                  }}
                  type="checkbox"
                ></input>
                <label>{c}</label>
              </div>
            )) : <>
              <div className="h-6 w-24 animate-pulse bg-indigo-400 rounded-md m-2 ml-1 "></div>
              <div className="h-6 w-24 animate-pulse bg-indigo-400 rounded-md m-2 ml-1 "></div>
              <div className="h-6 w-24 animate-pulse bg-indigo-400 rounded-md m-2 ml-1 "></div>
            </>}
        </div>
      </div>
      <div className="flex max-w-4xl justify-around mx-auto flex-wrap ">
        {products.length > 0 ?
          products
            .filter((p) =>
              currCategories.size > 0 ? currCategories.has(p.category) : p
            )
            .map((p) => (
              <div key={p.id}>
                <ProductCard {...p}></ProductCard>
              </div>
            )) : <>
            <LoadingProductCard></LoadingProductCard>
            <LoadingProductCard></LoadingProductCard>
            <LoadingProductCard></LoadingProductCard>
            <LoadingProductCard></LoadingProductCard>
            <LoadingProductCard></LoadingProductCard>
            <LoadingProductCard></LoadingProductCard>
            <LoadingProductCard></LoadingProductCard>
            <LoadingProductCard></LoadingProductCard>
            <LoadingProductCard></LoadingProductCard>
          </>}
      </div>
    </div>
  );
}
