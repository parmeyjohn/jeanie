import { doc, setDoc, addDoc, collection } from "firebase/firestore"; 
import { db } from "./firebase.config.js"

/*
{
    category: "pants",
    color: "blue",
    main_img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F176.jpg?alt=media&token=66c22b63-5e0a-43e4-9f11-0461cef214cb",
    sec_img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F178.jpg?alt=media&token=6e037cf1-a0eb-4f87-8d0c-e6b8bd289e5e",
    price: 19.99,
    alt_images: [ "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F179.jpg?alt=media&token=d39112c0-43e7-49df-983c-840ee08adab5",
    "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F177.jpg?alt=media&token=2dc30382-033e-47dc-9387-31d5a9cbff2d"
    ],
    title: "Relaxed Dark Wash Blue Jeans",
    section: "men",
    id: 12

}



*/


const data = [{
    category: "pants",
    color: "black",
    main_img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F10.jpg?alt=media&token=67d37592-6d61-4207-8556-13181449b2e2",
    sec_img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F11.jpg?alt=media&token=885b74f8-ea63-448b-a66c-97c86125b04e",
    price: 39.99,
    alt_images: [ "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F7.jpg?alt=media&token=ab5c70f8-3e4f-476a-bf4b-df21652e1244",
    "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2Fslim_black_jeans%2F12.jpg?alt=media&token=162e4d6f-a3d4-4443-b9e0-cdc5f7c0444a"
    ],
    title: "Skinny Black Jeans",
    section: "men",
    id: 1

},

{
    category: "pants",
    color: "black",
    main_img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F19.jpg?alt=media&token=cadbd8dd-a15b-4581-881a-7a17515d86c8",
    sec_img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F20.jpg?alt=media&token=6924d504-1e57-4128-a8be-16739065e5a6",
    price: 59.99,
    alt_images: [ "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F21.jpg?alt=media&token=051c98c8-718c-4750-8c57-b3a945bd8a41"
    ],
    title: "Premium Slim Black Jeans",
    section: "men",
    id: 6

},
{
    category: "pants",
    color: "black",
    main_img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F115.jpg?alt=media&token=0908909c-80fc-45c6-9e0e-b3976ef74943",
    sec_img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F117.jpg?alt=media&token=23fcd832-396f-451d-8495-00d337cabd4b",
    price: 59.99,
    alt_images: [ "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F118.jpg?alt=media&token=7058f257-b2fe-4d20-9e85-8f34e4841a72"
    ],
    title: "Extra Skinny Black Jeans",
    section: "men",
    id: 7

},

{
    category: "pants",
    color: "blue",
    main_img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F125.jpg?alt=media&token=fa2767f8-9ef5-42f6-9d15-68eeb56f044d",
    sec_img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F126.jpg?alt=media&token=bfdef5c2-9cdc-496a-a43e-35dc7a400c0e",
    price: 59.99,
    alt_images: [ "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F121.jpg?alt=media&token=f219c557-5241-425e-a193-c8f4e0cc4f38",
    "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F127.jpg?alt=media&token=230a10b2-d5e4-4940-bed8-e8d71c2fe745"
    ],
    title: "Slim Faded Blue Jeans",
    section: "men",
    id: 8

},

{
    category: "pants",
    color: "black",
    main_img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F161.jpg?alt=media&token=21e49c2c-50cd-4a30-97c1-ac72cba943e9",
    sec_img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F158.jpg?alt=media&token=83e01e5b-d021-44f4-b56f-dfb3d3875ce5",
    price: 29.99,
    alt_images: [ "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F160.jpg?alt=media&token=6b9679d7-dc1d-45d0-afe3-025cb945fe1f"
    ],
    title: "Straight Black Jeans",
    section: "men",
    id: 9

},

{
    category: "pants",
    color: "blue",
    main_img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F166.jpg?alt=media&token=64c477bc-87c0-4349-9413-a00a9186f6db",
    sec_img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F168.jpg?alt=media&token=91a6ecb3-e84b-4fb4-814a-10cb6693a1c6",
    price: 29.99,
    alt_images: [ "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F164.jpg?alt=media&token=5916c4c7-9ae0-44fc-9b49-1390dfc29690",
    "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F169.jpg?alt=media&token=3b5ab336-6f74-4e38-bfa2-757b8727595c"
    ],
    title: "Straight Dark Wash Blue Jeans",
    section: "men",
    id: 10

},
{
    category: "pants",
    color: "white",
    main_img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F173.jpg?alt=media&token=49f83034-6a52-4bbf-b765-a16905252f8f",
    sec_img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F174.jpg?alt=media&token=c7668503-968b-4c51-854e-6b7070d8e564",
    price: 19.99,
    alt_images: [ "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F171.jpg?alt=media&token=6dfb7b62-b1e6-4410-b2a0-7193aca92aed",
    "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F172.jpg?alt=media&token=33b4d5f5-a28c-4648-ad8d-d0e8673ec270"
    ],
    title: "Skinny Tapered White Jeans",
    section: "men",
    id: 11

},



{
    category: "pants",
    color: "blue",
    main_img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F176.jpg?alt=media&token=66c22b63-5e0a-43e4-9f11-0461cef214cb",
    sec_img: "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F178.jpg?alt=media&token=6e037cf1-a0eb-4f87-8d0c-e6b8bd289e5e",
    price: 19.99,
    alt_images: [ "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F179.jpg?alt=media&token=d39112c0-43e7-49df-983c-840ee08adab5",
    "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F177.jpg?alt=media&token=2dc30382-033e-47dc-9387-31d5a9cbff2d"
    ],
    title: "Relaxed Dark Wash Blue Jeans",
    section: "men",
    id: 12

}









]

const collectionRef = collection(db, '/men');
for (const productObject of data) {
    await addDoc(collectionRef, productObject)
}
