import { collection, getDocs } from "firebase/firestore";
import { db } from "../../services/firebase";

export async function getAllDocuments(collectionName) {
    try {
        // Reference to your collection
        const querySnapshot = await getDocs(collection(db, collectionName));

        // Initialize an array to hold the documents
        const documentsArray = [];

        // Push each document's data into the array
        querySnapshot.forEach((doc) => {
            documentsArray.push({ id: doc.id, ...doc.data() });
        });

        // Return the array with all documents
        return documentsArray;
    } catch (error) {
        console.error("Error retrieving documents: ", error);
        return []; // Return an empty array in case of an error
    }
}