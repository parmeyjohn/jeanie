import ProductCarousel from "./productCarousel";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between px-24  mx-auto bg-slate-200">
      <div className="w-screen h-auto max-w-4xl text-3xl flex justify-center p-2 mb-16">
        <div className="relative rounded-xl w-[60%] h-[40rem] m-2 shadow-lg">
          <div className="absolute w-full h-full transition-all ease-linear duration-100 rounded-xl z-10 bg-indigo-200 opacity-0 hover:opacity-10"></div>
          <Image
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1629045246540-16a761db8b35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            alt="denim pants"
            fill={true}
          ></Image>
        </div>
        <div className="flex flex-col justify-between h-[40rem] w-[40%] m-2">
          <div className="bg-indigo-500 border border-indigo-600 rounded-xl h-[40%] p-4 shadow-2xl mb-4">
            <div className="flex-col justify-between items-end font-medium text-5xl px-2 h-full text-indigo-50">
              <div className="my-2">New</div>
              <div className="my-2">Summer</div>
              <div className="my-2">Denim</div>
            </div>
          </div>
          <div className="bg-indigo-300 text-lg rounded-xl h-[60%] p-4 shadow-md">
            <div className="flex-col justify-between">
              <p className="p-4 leading-8">
                Elevate your summer game with our exclusive denim sale. Unleash
                laid-back vibes and effortless style as you explore a curated
                collection of jeans, shorts, and more.
              </p>
              <div className="w-full p-4">
                <h3 className="font-semibold text-md">Shop now:</h3>
                <div className="flex justify-between items-center my-2">
                  <button className="w-32 cursor-pointer rounded-md text-indigo-50 border-b-2 border-indigo-800 shadow-md bg-indigo-600 hover:bg-indigo-700 hover:shadow-sm active:bg-indigo-800 active:shadow-xs transition-all duration-100 ease-in-out p-4">
                    Men
                  </button>
                  <button className="w-32 cursor-pointer rounded-md text-indigo-50 border-b-2 border-indigo-800 shadow-md bg-indigo-600 hover:bg-indigo-700 hover:shadow-sm active:bg-indigo-800 active:shadow-xs transition-all duration-100 ease-in-out p-4">
                    Women
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="mb-16">
          <ProductCarousel title="Featured Items"></ProductCarousel>
        </div>
        <h2 className="text-lg font-semibold">Shop new arrivals:</h2>
        <div className="flex justify-around items-center p-4 mb-16">
          <div className="relative border border-indigo-700 rounded-xl h-96 w-96 ">
            <div className="absolute shadow-2xl hover:shadow-lg cursor-pointer w-full h-full rounded-xl flex justify-center items-center opacity-[0.85] opacity-85 hover:bg-indigo-600 bg-indigo-500 transition-all duration-100 ease-linear z-10">
              <h2 className="text-indigo-50 uppercase opacity-100 text-3xl font-semibold">
                Men's
              </h2>
            </div>
            <Image
              className="rounded-xl opacity-15 object-cover"
              src="https://images.unsplash.com/photo-1512441547630-6ef146e5af13?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=686&q=80"
              alt="Man wearing denim jacket"
              fill={true}
            ></Image>
          </div>
          
          <div className="relative border border-indigo-700 rounded-xl h-96 w-96 ">
            <div className="absolute shadow-2xl hover:shadow-lg cursor-pointer w-full h-full rounded-xl flex justify-center items-center opacity-[0.85] opacity-85 hover:bg-indigo-600 bg-indigo-500 transition-all duration-100 ease-linear z-10">
              <h2 className="text-indigo-50 uppercase opacity-100 text-3xl font-semibold">
                Women's
              </h2>
            </div>
            <Image
              className="rounded-xl opacity-15 object-cover object-bottom"
              src="https://images.unsplash.com/photo-1518825546183-853390a31be3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=737&q=80"
              alt="Woman wearing denim jacket"
              fill={true}
            ></Image>
          </div>

        </div>
      </div>
    </main>
  );
}
