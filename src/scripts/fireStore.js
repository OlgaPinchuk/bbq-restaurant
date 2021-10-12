// NPM packages
import {
  collection,
  getDocs,
  setDoc,
  updateDoc,
  doc,
  deleteDoc,
} from "firebase/firestore/lite";

// Project files
import { fireStoreInstance } from "./firebase";

// Create collection
export async function createDocument(db, path, data) {
  await setDoc(doc(db, path), data);
  console.log("Document sent");
}

// Read collection
export async function getCollection(path) {
  const collectionReference = collection(fireStoreInstance, path);
  const snapshot = await getDocs(collectionReference);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

// Update file
export async function updateDocument(db, path, id, data) {
  const docReference = doc(db, path, id);

  await updateDoc(docReference, data);
}

// Delete file
export async function deleteDocument(db, path, id) {
  const docReference = doc(db, path, id);

  await deleteDoc(docReference);
}
