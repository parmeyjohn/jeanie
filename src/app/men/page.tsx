'use client'
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { auth, storage } from '../../../firebase.config'
import { useEffect, useState } from "react";
import Image from "next/image";

export default function Men() {
    const [imgUrl, setImgUrl] = useState('')

    useEffect(() => {
        //getImages().then((res) => setImgUrl(res))
    }, [])
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
    
    return(<div>
        <button onClick={() => getImages()}> Get images</button>
        {imgUrl && <Image width={200} height={200} src={imgUrl} alt='pants'></Image>}
    </div>)
}