// NPM packages
import {
  doc,
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore/lite";

// Project files
import { fireStoreInstance } from "./firebase";

// Create collection
export async function createDocument(path, data) {
  const collectionReference = collection(fireStoreInstance, path);
  const newDoc = await addDoc(collectionReference, data);

  return newDoc.id;
}

// Read collection
export async function getCollection(path) {
  const collectionReference = collection(fireStoreInstance, path);
  const snapshot = await getDocs(collectionReference);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
}

// Update file
export async function updateDocument(path, docId, data) {
  const documentReference = doc(fireStoreInstance, path, docId);

  await updateDoc(documentReference, data);
}

// Delete file
export async function deleteDocument(db, path, id) {
  const docReference = doc(db, path, id);

  await deleteDoc(docReference);
}
