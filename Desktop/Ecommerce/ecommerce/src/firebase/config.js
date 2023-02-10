import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHr8q4MBBm_kHmo0h_amDD7NdyiaU-DoE",
  authDomain: "pcstoreecommerce-33850.firebaseapp.com",
  projectId: "pcstoreecommerce-33850",
  storageBucket: "pcstoreecommerce-33850.appspot.com",
  messagingSenderId: "314999549071",
  appId: "1:314999549071:web:55d3890734c0aafc5fd4fa",
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/**
 * @function getProducts
 *Esta función extrae de la base de datos (Firestore) todos los productos de la colección "products".
 *@return {Array} Arreglo de los productos.
**/
export const getProducts = async () => {
  const productsCollectionRef = collection(db, "products");
  const snapshot = await getDocs(productsCollectionRef);
  const products = snapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return products;
};

/**
 * @function getProduct
 * Esta función extrae de la base de datos (Firestore) un producto específico de la colección "products".
 * @param {String} itemId Id del producto a extraer.
 * @return {Object} Objeto con los datos del producto.
 * */
export const getProduct = async (itemId) => {
  const productsCollectionRef = collection(db, "products");
  const docRef = doc(productsCollectionRef, itemId);
  const snapshot = await getDoc(docRef);
  return {
    ...snapshot.data(),
    id: snapshot.id,
  };
};

/**
 * @function getByCategory
 * Esta función extrae de la base de datos (Firestore) todos los productos de una categoría de la colección "products".
 * @param {String} category Categoría de los productos a extraer.
 * @return {Array} Arreglo de los productos de una categoría.
 * */
export const getByCategory = async (category) => {
  const productsCollectionRef = collection(db, "products");
  const q = query(productsCollectionRef, where("category", "==", category));
  const snapshot = await getDocs(q);
  const products = snapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return products;
};

/**
 * @function getByBrand
 * Esta función extrae de la base de datos (Firestore) todos los productos de una marca de la colección "products".
 * @param {String} category Categoría de los productos a extraer.
 * @param {String} brand Marca de los productos a extraer.
 * @return {Array} Arreglo de los productos de una marca.
 * */
export const getByBrand = async (category, brand) => {
  const productsCollectionRef = collection(db, "products");
  const q = query(
    productsCollectionRef,
    where("category", "==", category),
    where("brand", "==", brand)
  );
  const snapshot = await getDocs(q);
  const products = snapshot.docs.map((doc) => {
    return {
      ...doc.data(),
      id: doc.id,
    };
  });
  return products;
};
