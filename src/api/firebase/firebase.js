// import { initializeApp } from "firebase/app";
// import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import { initializeApp } from "firebase/app";
import { initializeApp } from '@firebase/app'
import {
  getFirestore,
  collection,
  getDocs,
  doc,
  addDoc,
  query,
  where,
  updateDoc,
  arrayUnion,
  arrayRemove,
  setDoc,
  limit,
  deleteField,
  serverTimestamp,
} from 'firebase/firestore/lite'
import { getAnalytics } from 'firebase/analytics'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyD1wJsslwcN4D3e5k2AcGZRK0wCTyPVtKI',
  authDomain: 'project-10557.firebaseapp.com',
  projectId: 'project-10557',
  storageBucket: 'project-10557.appspot.com',
  messagingSenderId: '995543860451',
  appId: '1:995543860451:web:69f0bf2c20e9e8fbaf31d6',
}
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
export const db = getFirestore(app)

export const productsAPI = {
  async getProducts(limitSize = 10) {
    const products = await getDocs(
      query(collection(db, 'products'), limit(limitSize)),
    )
    let productsList = products.docs.map((doc) => doc.data())
    return productsList
  },
  async getProduct(base, id) {
    const proudctRef = collection(db, 'products')
    const q = query(proudctRef, where('id', '==', id))
    const docProduct = await getDocs(q)
    const product = docProduct.docs.map((doc) => doc.data())
    return product
  },
  async postProduct(base, data, id) {
    setDoc(doc(base, 'products', id), data)
  },
}

export const authAPI = {
  async examAuth() {
    const auth = getAuth()
    return auth
  },
  login(email, password) {
    const auth = getAuth()
    let user = signInWithEmailAndPassword(auth, email, password)
    //  debugger
    return user
  },
  logout() {
    const auth = getAuth()
    signOut(auth)
      .then(() => {})
      .catch((error) => {})
  },
}

export const directoryAPI = {
  async getDirectory(base) {
    const products = await getDocs(collection(db, 'directory'))
    const productsList = products.docs.map((doc) => doc.data())
    return productsList
  },
  async addCategory(base, newCategory) {
    const newCateg = doc(db, 'directory', 'directory')
    // let add = category.push(newCategory)
    await updateDoc(newCateg, {
      categories: arrayUnion(newCategory),
    })
  },
  async delCategory(base, newCategory) {
    const newCateg = doc(db, 'directory', 'directory')
    // let add = category.push(newCategory)
    await updateDoc(newCateg, {
      categories: arrayRemove(newCategory),
    })
  },
}

export const changeAPI = {
  async changeField(idProd, nameField, newValue) {
    const q = doc(db, 'products', idProd)
    await updateDoc(q, {
      [nameField]: newValue,
    })
  },
  async updateDocument(idProduct, newField) {
    const ref = doc(db, 'products', idProduct)
    await updateDoc(ref, newField)
  },
  async delField(idProduct, fieldName) {
    const ref = doc(db, 'products', idProduct)
    debugger
    await updateDoc(ref, {
      [fieldName]: deleteField(),
    })
  },
}
