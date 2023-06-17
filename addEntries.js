import { doc, setDoc, addDoc, getDocs, collection } from "firebase/firestore"; 
import { db } from "./firebase.config.js"




const collectionRef = collection(db, 'men');
const queryResult = await getDocs(collectionRef);
queryResult.forEach(async (currDoc) => {
    console.log(currDoc.id)
    var currId = currDoc.data().id
    await setDoc(doc(collectionRef, `${currId}`), currDoc.data());
})
//for (const doc of collectionRef) {
    //console.log(doc)
    //await addDoc(collectionRef, productObject)
//}
