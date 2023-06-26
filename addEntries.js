import { doc, setDoc, addDoc, getDocs, collection } from "firebase/firestore"; 
import { db } from "./firebase.config.js"

const products = [
    {
        "price": 49.99,
            "category": "pants",
            "id": 54,
            "title": "Striped Skinny Jeans",
            "section": "women",
            "sec_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F17.jpg?alt=media&token=f40eda73-080e-4794-991b-2cbc28fffd03",
            "alt_images": [
                "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F13.jpg?alt=media&token=ccdd07b6-8904-4f42-9e0c-2082992c909c",
                "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F18.jpg?alt=media&token=a3d8bf66-4838-4a8e-bbc2-94074cfe7de1"
            ],
            "main_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F16.jpg?alt=media&token=78f2534b-976c-4267-81eb-df6bcecd8408",
            "color": "white"
    },
    {
        "price": 29.99,
            "category": "pants",
            "id": 55,
            "title": "Skinny Black Jeans",
            "section": "women",
            "sec_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F29.jpg?alt=media&token=8592bc67-12b0-4571-ab99-738a3e892024",
            "alt_images": [
                "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F25.jpg?alt=media&token=d87a894a-aa47-4e3a-8200-a573d4d55742",
                "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F30.jpg?alt=media&token=b6575b6b-3280-4bc4-8219-4decaf0674ef"
            ],
            "main_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F28.jpg?alt=media&token=93685efa-1762-4064-91c7-657dda263c7c",
            "color": "black"
    },
    {
        "price": 29.99,
            "category": "pants",
            "id": 56,
            "title": "Blue Skinny Jeans",
            "section": "women",
            "sec_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F59.jpg?alt=media&token=b1631e3c-7f8f-431c-b39a-20cb3e0a0884",
            "alt_images": [
                "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F55.jpg?alt=media&token=0ae7da46-cc76-4355-8839-3f0884e970b7",
                "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F60.jpg?alt=media&token=fa98c6f4-3493-4cf3-b4cc-e3ad17ef5fd1"
            ],
            "main_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F58.jpg?alt=media&token=78b5f1e3-5fa3-4d1c-89ac-81c0baf0c9d8",
            "color": "blue"
    },
    {
        "price": 49.99,
            "category": "pants",
            "id": 57,
            "title": "Premium Black Skinny Jeans",
            "section": "women",
            "sec_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F65.jpg?alt=media&token=88723d08-7b2c-4b7f-8f64-37e79e326850",
            "alt_images": [
                "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F61.jpg?alt=media&token=c32aa443-19fe-40ae-8348-05683d2f6623",
                "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F66.jpg?alt=media&token=54fa207c-9072-4bbe-be99-374202646c14"
            ],
            "main_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F64.jpg?alt=media&token=c3cb86ff-a594-4646-940f-ddd6f3f7f5c2",
            "color": "black"
    },
    {
        "price": 39.99,
            "category": "pants",
            "id": 58,
            "title": "Blue Bell Bottom Jeans",
            "section": "women",
            "sec_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F71.jpg?alt=media&token=f6d094e8-0b8c-47d8-b198-379e9a574497",
            "alt_images": [
                "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F67.jpg?alt=media&token=d009d1dd-4421-4993-af73-9259dfb3a1ba",
                "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F72.jpg?alt=media&token=aee661ab-a88c-40ae-9168-04afe2a33c43"
            ],
            "main_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F70.jpg?alt=media&token=dcabb6c7-a5af-46f3-a813-422ed01d9cc5",
            "color": "blue"
    },
    {
        "price": 19.99,
            "category": "pants",
            "id": 59,
            "title": "Blue Skinny Jeans",
            "section": "women",
            "sec_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F77.jpg?alt=media&token=3ffd67c2-f897-4b37-953d-92cfe40f7ce8",
            "alt_images": [
                "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F73.jpg?alt=media&token=cb692693-cfb7-4f9c-832a-46c8bd025878",
                "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F78.jpg?alt=media&token=1044e25f-e680-41bb-8fd2-fc9831c9fc38"
            ],
            "main_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F76.jpg?alt=media&token=8bccfa41-466c-4577-90a8-51540f88fba6",
            "color": "blue"
    },
    {
        "price": 49.99,
            "category": "pants",
            "id": 60,
            "title": "Premium Blue Skinny Jeans",
            "section": "women",
            "sec_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F65.jpg?alt=media&token=88723d08-7b2c-4b7f-8f64-37e79e326850",
            "alt_images": [
                "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F79.jpg?alt=media&token=16a3b848-5f6a-4b79-9eec-60bf9c30e4ec",
                "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F83.jpg?alt=media&token=03dca0be-3096-4ce7-bf9d-386925f1c937"
            ],
            "main_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F82.jpg?alt=media&token=4c5e4c7d-9967-44ff-b01a-2a128916a717",
            "color": "blue"
    },
    {
        "price": 44.99,
            "category": "pants",
            "id": 61,
            "title": "Performance Black Skinny Jeans",
            "section": "women",
            "sec_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F89.jpg?alt=media&token=d71eb878-57d4-4176-b4f5-7dbb6d870c46",
            "alt_images": [
                "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F86.jpg?alt=media&token=0b5b2799-8c3d-45fd-95b5-54cefd77d7a6",
                "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F90.jpg?alt=media&token=a47663b6-33ae-409c-aaa5-7733986e129a"
            ],
            "main_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F88.jpg?alt=media&token=c8acb2fb-f541-49a1-8c9b-da93ad9250f8",
            "color": "black"
    },
    {
        "price": 23.99,
            "category": "pants",
            "id": 62,
            "title": "Faded Gray Skinny Jeans",
            "section": "women",
            "sec_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F107.jpg?alt=media&token=6f0da186-4b90-402a-816e-f297f71465d3",
            "alt_images": [
                "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F103.jpg?alt=media&token=0e732610-4c0c-4342-8807-dac285772a2f",
                "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F108.jpg?alt=media&token=b9703e57-ed06-44b6-8920-8d53d3abe913"
            ],
            "main_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F106.jpg?alt=media&token=8700e3c9-67ec-42a1-9f3b-c73270b5fc86",
            "color": "gray"
    },
    {
        "price": 19.99,
            "category": "pants",
            "id": 63,
            "title": "Distressed Cheetah Skinny Jeans",
            "section": "women",
            "sec_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F114.jpg?alt=media&token=13ddc071-1d7f-46af-b7e5-0a705be9b3cf",
            "alt_images": [
                "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F109.jpg?alt=media&token=b99f96d6-aaad-497b-a890-d898f5f1eb6b",
                "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F112.jpg?alt=media&token=79627619-a993-47c0-9932-1362d9b881dc"
            ],
            "main_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F113.jpg?alt=media&token=25a89e31-b239-43e7-84ab-2a96c166d5e6",
            "color": "multi"
    },
    {
        "price": 23.99,
            "category": "pants",
            "id": 64,
            "title": "Cropped Blue Skinny Jeans",
            "section": "women",
            "sec_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F198.jpg?alt=media&token=00087727-95db-4ab4-ab0c-8c0970abd2d9",
            "alt_images": [
                "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F194.jpg?alt=media&token=95300b82-3f73-460d-bddd-78575da77b3a",
                "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F199.jpg?alt=media&token=dd82c6b1-5e7e-4585-9759-389671bb401b"
            ],
            "main_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F197.jpg?alt=media&token=bafd9c3d-0f3b-4793-aee9-ad8c5e595b7d",
            "color": "blue"
    },
    {
        "price": 36.99,
            "category": "pants",
            "id": 65,
            "title": "Dark Blue Bell Bottom Jeans",
            "section": "women",
            "sec_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F192.jpg?alt=media&token=731d413b-53a4-41fe-9bf0-29af56ff646a",
            "alt_images": [
                "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F188.jpg?alt=media&token=b379cea7-2969-4c85-b575-68f079089775",
                "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F193.jpg?alt=media&token=03a9c2e9-2b56-4c53-96f4-954bc1ab95a4"
            ],
            "main_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F191.jpg?alt=media&token=ecf34ab7-6e27-42a2-9b9e-8e6723e0ee8e",
            "color": "blue"
    },
    {
        "price": 19.99,
            "category": "pants",
            "id": 66,
            "title": "Cropped Black Jeans",
            "section": "women",
            "sec_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F144.jpg?alt=media&token=a192f68e-c304-41b6-9adf-a0b9aa86bb68",
            "alt_images": [
                "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F140.jpg?alt=media&token=386dd68c-f1b3-4e88-808d-ee1295ce6f6e",
                "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F145.jpg?alt=media&token=f4276b43-9d99-43d1-bb7a-ba3322bc0ff0"
            ],
            "main_img": "https://firebasestorage.googleapis.com/v0/b/ecommerce-app-eb24a.appspot.com/o/women%2Fpants%2F143.jpg?alt=media&token=bb1058a5-41b6-4c66-bd0a-b54739db8b24",
            "color": "black"
    },
    
    
]



const collectionRef = collection(db, 'women');
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
