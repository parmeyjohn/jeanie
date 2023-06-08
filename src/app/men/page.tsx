'use client'
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { auth, storage, db } from '../../../firebase.config'
import { doc, getDocs, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import Image from "next/image";
import ProductCard from "../productCard";
interface Product {
    category: string,
    name: string, 
    color: string, 
    img_path: string,
    price: number
}

export default function Men() {
    const [imgUrl, setImgUrl] = useState('')
    const [products, setProducts] = useState(Array<Product>)
    useEffect(() => {
        //getImages().then((res) => setImgUrl(res))
        //console.log(productsRef)
        getObjects()
    }, [])
    
    

    const getObjects = async () => {
        const query = await getDocs(collection(db, "men"));
        var productArray:Array<Product> = []
        query.forEach((doc) => productArray.push(doc.data() as Product))
        console.log(productArray)
        setProducts(productArray)

    }
    const getImages = async () => {
        //TODO: plug in individual component file here
        const storageRef = ref(storage, 'pants/men_pants');
        const files = await listAll(storageRef)
        const urlPromises = files.items.map((imageRef) => getDownloadURL(imageRef));
        const img = await urlPromises[0]
        setImgUrl(img)
        console.log('urlPromises', )
        return urlPromises

    }
    
    return (
    <div>
        <button onClick={() => getImages()}> Get images</button>
        {imgUrl && <Image width={200} height={200} src={imgUrl} alt='pants'></Image>}
        {products && 
            products.map((p) => <div key={p.name}><ProductCard productObj={p}></ProductCard></div>)}
    </div>
    )
}