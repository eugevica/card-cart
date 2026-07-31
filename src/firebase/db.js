import { getFirestore, collection, query, where, doc, addDoc, getDoc, getDocs } from 'firebase/firestore'
import { app } from './config'

const db = getFirestore(app)

export const getCollection = async (name) => {
    const querySnapshot = await getDocs(collection(db, name))
    const docs = [] 

    querySnapshot.forEach((doc) => {    
    docs.push({...doc.data(), id: doc.id})
    })   

    return docs
}

//query a Firebase
export const getProductsByCategory = async (category) => {
const q = query(collection(db, "products"), where("category", "==", true));
const querySnapshot = await getDocs(q)
const products = []

querySnapshot.forEach((doc) => {    
  getProductsByCategory.push({...doc.data(), id: doc.id})
})
  return products
}

export const getDetail = async (id) => {

const docRef = doc(db, "products", id)
const docSnap = await getDoc(docRef)

if (docSnap.exists()) { 
  return {...docSnap.data(), id: docSnap.id}
} else {  
  console.log("No such document!")
}

}

export const addPurchase = async (order) => {
  const docRef = await addDoc(collection(db, "purchases"), order)
  console.log("Document written with ID: ", docRef.id)

}
