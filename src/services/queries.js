import { database } from "../config/firebase/sdk";
import { collection, getDocs, query } from "firebase/firestore";

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

export async function fetchDataWhere(collectionName, queryConditions = []) {
  try {
    const collectionRef = collection(database, collectionName);

    const q = query(collectionRef, ...queryConditions);
    const data = await getDocs(q);

    const filteredData = data.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    return filteredData;
  } catch (err) {
    console.error(err);
  }
}

// TODO: Add proper error handle to queries
