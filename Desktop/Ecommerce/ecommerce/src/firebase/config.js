import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, getDoc, doc, query, where } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAHr8q4MBBm_kHmo0h_amDD7NdyiaU-DoE",
  authDomain: "pcstoreecommerce-33850.firebaseapp.com",
  projectId: "pcstoreecommerce-33850",
  storageBucket: "pcstoreecommerce-33850.appspot.com",
  messagingSenderId: "314999549071",
  appId: "1:314999549071:web:55d3890734c0aafc5fd4fa"
};

export const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const getProducts = async () => {
    const productsCollectionRef = collection(db, "products");
    const snapshot = await getDocs(productsCollectionRef);
    const products = snapshot.docs.map(doc => {
        return {
            ...doc.data(),
            id: doc.id
        };
    });
    return products;
};

export const getProduct = async (itemId) => {
    const productsCollectionRef = collection(db, "products");
    const docRef = doc(productsCollectionRef, itemId);
    const snapshot = await getDoc(docRef);
    return {
        ...snapshot.data(),
        id: snapshot.id
    };
    
};

export const getByCategory = async (category) => {
    const productsCollectionRef = collection(db, "products");
    const q = query(productsCollectionRef, where("category", "==", category));
    const snapshot = await getDocs(q);
    const products = snapshot.docs.map(doc => {
        return {
            ...doc.data(),
            id: doc.id
        };
    });
    return products;
};

export const getByBrand = async (category, brand) => {
    const productsCollectionRef = collection(db, "products");
    const q = query(productsCollectionRef, where("category", "==", category), where("brand", "==", brand));
    const snapshot = await getDocs(q);
    const products = snapshot.docs.map(doc => {
        return {
            ...doc.data(),
            id: doc.id
        };
    });
    return products;
}
