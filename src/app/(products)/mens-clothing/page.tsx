"use client";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { auth, storage, db } from "../../../../firebase.config";
import { doc, getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import Image from "next/image";
import ProductCard from "./../productCard";
import { Product } from "../../../../types";
import Link from "next/link";

export default function MensClothing() {
  const [imgUrl, setImgUrl] = useState("");
  const [sorting, setSorting] = useState("");
  const [products, setProducts] = useState(Array<Product>);
  const [categories, setCategories] = useState(Array<String>);
  useEffect(() => {
    //getImages().then((res) => setImgUrl(res))
    //console.log(productsRef)
    getObjects();
  }, []);

  const getObjects = async () => {
    const query = await getDocs(collection(db, "men"));
    var productArray: Array<Product> = [];
    query.forEach((doc) => productArray.push(doc.data() as Product));
    console.log(productArray);
    setProducts(productArray.sort((a,b) => a.id - b.id));
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
  function sortProducts(e:any) {
    setSorting(e.target.text)
    if (e.target.value === "low-high") {
      setProducts([...products.sort((a,b) => a.price - b.price)])
    } else if (e.target.value === "high-low") {
      setProducts([...products.sort((a,b) => b.price - a.price)])
    }
     else if (e.target.value === "featured") {
      setProducts([...products.sort((a,b) => a.id - b.id)])
    }
  }
  return (
    <div className="w-full max-w-4xl mx-auto h-full">
      <div className="flex justify-between items-center ml-4">
        <div className="">
          <h1 className="text-lg font-medium mt-4">Men's Clothing:</h1>
          <h2 className="ml-2 text-slate-500">{products.length} products</h2>
        </div>
        
        <div>
          <label htmlFor="sort-options">Sort:</label>
          <br></br>
          <select className="p-2 text-sm rounded-md outline-indigo-400" value={sorting} onChange={(e) => sortProducts(e)} name='sort-options'>
            <option value='featured'>
              Featured
            </option>
            <option value='high-low'>
              Price: high to low
            </option>
            <option value='low-high'>
              Price: low to high
            </option>
          </select>
        </div>
      </div>
      
      <div className="absolute left-0 bg-slate-400 rounded-md h-80 p-2">
        <h3 className="text-md font-medium">Browse:</h3>
        <div className="ml-2 flex-col">
          {categories &&
            categories.map((c, i) => (
              <div key={i}>
                <input type="checkbox"></input>
                <label>{c}</label>
              </div>
            ))}
        </div>
      </div>
      <div className="flex max-w-4xl mx-auto flex-wrap">
        {products &&
          products.map((p) => (
            <div key={p.id}>
              <ProductCard {...p}></ProductCard>
            </div>
          ))}
      </div>
    </div>
  );
}
