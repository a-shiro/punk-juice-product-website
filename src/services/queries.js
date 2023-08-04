import { database } from "../config/firebase/sdk";
import { collection, getDocs } from "firebase/firestore";

export async function fetchData(collectionName) {
  try {
    const collectionRef = collection(database, collectionName);
    const querySnapshot = await getDocs(collectionRef);
    const data = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    return data;
  } catch (err) {
    console.error(err);
  }
}
