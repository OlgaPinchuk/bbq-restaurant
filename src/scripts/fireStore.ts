// NPM packages
import {
  collection,
  getDocs,
  Firestore,
  doc,
  setDoc,
} from "firebase/firestore/lite";

// Create collection
export async function createDoc(db: Firestore, path: string, data: object) {
  await setDoc(doc(db, path), data);
  console.log("Document sent");
}

// Read collection
export async function getCollection(db: Firestore, path: string) {
  const fsCollection = collection(db, path);
  const collectionSnapshot = await getDocs(fsCollection);
  return collectionSnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}
