"use client";
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { useRouter } from 'next/router'
import { auth, storage } from "../../../firebase.config";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Product } from "../../../types"
import Link from "next/link";
import { usePathname } from "next/navigation";

// product card which displays alt image on hover if provided
export default function AltProductCard({img_path, price, title, main_img, sec_img, id}: Product) {
  const pathname = usePathname();
  const [productImages, setProductImages] = useState(Array<string>);
  const [imageHovered, setImageHovered] = useState(false)
  

  return (
    <Link href={`${pathname}/${id}`}>
        <div className="m-4 rounded-xl cursor-pointer">
        <div onMouseLeave={() => setImageHovered(false)} onMouseEnter={() => setImageHovered(true)} className="relative w-60 h-72 transition-all ease-in-out bg-slate-200 rounded-xl flex flex-col justify-center ">  
            {imageHovered ? 
            <Image  className="rounded-t-xl" fill={true}  src={sec_img} alt='pants'></Image>

            :
            <Image  className="rounded-t-xl w-10 h-10" fill={true} src={main_img} alt='pants'></Image>

            }
            
        </div>
        <h3 className=" text-sm font-medium p-2 pb-0">{title}</h3>
            <h4 className=" px-2 pb-2 ml-1 text-sm">${price}</h4>
        </div>
    </Link>
  );
}
