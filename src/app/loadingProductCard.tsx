"use client";
import Image from "next/image";


export default function LoadingProductCard() {

  return (
      <div className="m-4 rounded-xl border border-indigo-300 cursor-pointer bg-indigo-100">
        <div className="relative w-60 h-72 transition-all ease-in-out rounded-xl flex flex-col justify-center ">
          <div className="absolute z-10 opacity-0 rounded-t-xl w-full h-full bg-indigo-200 hover:opacity-20 transition-all ease-in-out duration-100"></div>
          <div className="w-full h-full bg-indigo-500 rounded-t-xl animate-pulse"></div>
        </div>
        
        <div className=" text-xs font-medium m-1 w-40 animate-pulse bg-indigo-400 h-4 rounded-md"></div>
        <div className=" m-1 text-xs w-16 animate-pulse bg-indigo-400 h-4 rounded-md"></div>
        
      </div>
  );
}
