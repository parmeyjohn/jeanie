"use client";
import Image from "next/image";
import { Product } from "../../types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ProductCard({
  price,
  title,
  main_img,
  sec_img,
  id,
}: Product) {
  const pathname = usePathname();

  return (
    <Link href={`${pathname}/${id}`}>
      <div className="m-4 rounded-xl border border-indigo-300 cursor-pointer bg-indigo-100">
        <div className="relative w-60 h-72 transition-all ease-in-out rounded-xl flex flex-col justify-center ">
          <div className="absolute z-10 opacity-0 rounded-t-xl w-full h-full bg-indigo-200 hover:opacity-20 transition-all ease-in-out duration-100"></div>
          <Image
            className="rounded-t-xl w-10 h-10 border-b border-b-indigo-300"
            fill={true}
            src={main_img}
            alt="pants"
          ></Image>
        </div>
        <h3 className=" text-xs font-medium p-2 pb-0">{title}</h3>
        <h4 className=" px-2 pb-2 ml-1 text-xs">${price}</h4>
      </div>
    </Link>
  );
}
