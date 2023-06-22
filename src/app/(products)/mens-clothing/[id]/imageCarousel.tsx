"use client";
import { useState } from "react";
import Image from "next/image";

import { Product } from "../../../../../types";

export default function ImageCarousel({ product, imageUrls }: { product: Product, imageUrls: string[] }) {

  const [activeImgUrl, setActiveImgUrl] = useState(imageUrls[0]);

  return (
    <div className="flex">
      <div className="relative w-80 h-80">
        {
          <Image
            className="rounded-t-xl w-10 h-10"
            fill={true}
            src={activeImgUrl}
            alt={product.title}
          ></Image>
        }
      </div>
      <div className="flex flex-col justify-start">
        {imageUrls.map((img: string, i: any) => (
          <div
            key={i}
            className="relative w-20 h-20 cursor-pointer transition-all"
          >
            <div className="w-full h-full absolute z-10 bg-indigo-500  rounded-md bg-opacity-0 hover:bg-opacity-50 transition-all ease-in-out duration-100"></div>
            <Image
              className={`${
                activeImgUrl === img ? "border-2 border-indigo-500" : ""
              } rounded-md border-2`}
              fill={true}
              src={img}
              alt={`${product.title} alt image ${i + 1}`}
              onClick={() => setActiveImgUrl(img)}
            ></Image>
          </div>
        ))}
      </div>
    </div>
  );
}
