"use client";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { auth, storage } from "../../firebase.config";
import { useEffect, useState } from "react";
import Image from "next/image";

export default function ProductCard({ productObj }) {
  const [productImages, setProductImages] = useState(Array<string>);

  useEffect(() => {
    getImages(productObj.img_path).then(() => console.log("hey"));
    //getImages().then((res) => setImgUrl(res))
  }, []);

  const getImages = async (path: string) => {
    //TODO: plug in individual component file here
    const storageRef = ref(storage, path);
    const files = await listAll(storageRef);
    const urlPromises = files.items.map((imageRef) => getDownloadURL(imageRef));
    var images: string[] = [];
    urlPromises.forEach(async (url) => {
      let curr_url = await url;
      images.push(curr_url);
    });
    console.log(images);
    setProductImages(images);
    console.log("urlPromises");
    return urlPromises;
  };

  return (
    <div className="m-4">
      <div className="bg-slate-900 rounded-xl w-fit flex flex-col justify-center ">
        <Image width={200} height={200} src={productImages[0]} alt='pants'></Image>
        <h3 className=" text-lg font-medium">{productObj.name}</h3>
        <h4 className="text-md">${productObj.price}</h4>
      </div>
    </div>
  );
}
