import { doc, setDoc, addDoc, getDocs, collection } from "firebase/firestore"; 
import { db } from "./firebase.config.js"

const products = [
    {
        "category": "pants",
        "main_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F166.jpg?alt=media&token=64c477bc-87c0-4349-9413-a00a9186f6db",
        "color": "blue",
        "sec_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F168.jpg?alt=media&token=91a6ecb3-e84b-4fb4-814a-10cb6693a1c6",
        "section": "men",
        "title": "Straight Dark Wash Blue Jeans",
        "alt_images": [
            "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F164.jpg?alt=media&token=5916c4c7-9ae0-44fc-9b49-1390dfc29690",
            "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F169.jpg?alt=media&token=3b5ab336-6f74-4e38-bfa2-757b8727595c"
        ],
        "id": 10,
        "price": 29.99
    }, {
        "category": "pants",
        "title": "Slim Dark Wash Blue Jeans",
        "section": "men",
        "alt_images": [
            "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F43.jpg?alt=media&token=f05e56c5-0d19-4df9-ac80-604deb380ac1",
            "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F48.jpg?alt=media&token=14bea40b-ab98-4068-83e2-882af95b08b7"
        ],
        "main_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F46.jpg?alt=media&token=0b86bbd8-3309-4414-a39b-3c5d7888730f",
        "price": 19.99,
        "color": "blue",
        "sec_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F47.jpg?alt=media&token=730abd39-d3ac-415e-8919-53bf426a3383",
        "id": 4
    },
    {
        "alt_images": [
            "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F188.jpg?alt=media&token=b379cea7-2969-4c85-b575-68f079089775",
            "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F193.jpg?alt=media&token=03a9c2e9-2b56-4c53-96f4-954bc1ab95a4"
        ],
        "sec_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F192.jpg?alt=media&token=731d413b-53a4-41fe-9bf0-29af56ff646a",
        "title": "Dark Blue Bell Bottom Jeans",
        "color": "blue",
        "section": "women",
        "price": 36.99,
        "main_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F191.jpg?alt=media&token=ecf34ab7-6e27-42a2-9b9e-8e6723e0ee8e",
        "category": "pants",
        "id": 65
    },
    {
        "section": "women",
        "category": "pants",
        "sec_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F65.jpg?alt=media&token=88723d08-7b2c-4b7f-8f64-37e79e326850",
        "price": 49.99,
        "title": "Premium Blue Skinny Jeans",
        "color": "blue",
        "id": 60,
        "alt_images": [
            "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F79.jpg?alt=media&token=16a3b848-5f6a-4b79-9eec-60bf9c30e4ec",
            "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F83.jpg?alt=media&token=03dca0be-3096-4ce7-bf9d-386925f1c937"
        ],
        "main_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F82.jpg?alt=media&token=4c5e4c7d-9967-44ff-b01a-2a128916a717"
    },

    {
        "section": "women",
        "price": 19.99,
        "color": "blue",
        "sec_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F77.jpg?alt=media&token=3ffd67c2-f897-4b37-953d-92cfe40f7ce8",
        "category": "pants",
        "title": "Blue Skinny Jeans",
        "main_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F76.jpg?alt=media&token=8bccfa41-466c-4577-90a8-51540f88fba6",
        "alt_images": [
            "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F73.jpg?alt=media&token=cb692693-cfb7-4f9c-832a-46c8bd025878",
            "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F78.jpg?alt=media&token=1044e25f-e680-41bb-8fd2-fc9831c9fc38"
        ],
        "id": 59
    }
    
    , {
        "sec_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F53.jpg?alt=media&token=92818696-0a70-4e07-b20a-fabe058a442f",
        "alt_images": [
            "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F48.jpg?alt=media&token=ef3274a3-fcc0-41e3-9098-5a69ee1bc53c",
            "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F49.jpg?alt=media&token=f64af4c7-ef91-4a04-950e-a42ce8839475"
        ],
        "title": "Straight-leg Blue Jeans",
        "section": "men",
        "main_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/men%2Fpants%2F52.jpg?alt=media&token=1b1a4b43-666c-46a1-9cd3-fcc753ebb1b6",
        "id": 2,
        "color": "black",
        "price": 24.99,
        "category": "pants"
    }
    
]



const collectionRef = collection(db, 'featured-items');
//const queryResult = await getDocs(collectionRef);
// queryResult.forEach(async (currDoc) => {
//     console.log(currDoc.id)
//     var currId = currDoc.data().id
//     await setDoc(doc(collectionRef, `${currId}`), currDoc.data());
// })
for (const product of products) {
    //console.log(doc)
    //await addDoc(collectionRef, productObject)
    await setDoc(doc(collectionRef, `${product.id}`), product);

}
