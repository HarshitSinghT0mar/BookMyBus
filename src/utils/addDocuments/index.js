import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase";

export const addMultipleDocuments = async (collectionName, documents) => {
    try {
        const docIds = [];
        for (const docData of documents) {
            const { routeId, ...data } = docData; // Destructure to get the routeId and remaining data
            const docRef = doc(collection(db, collectionName), routeId); // Use routeId as the custom document ID
            await setDoc(docRef, data); // Set document with custom ID
            docIds.push(routeId); // Push custom ID to the array
        }
        console.log("Documents added with IDs: ", docIds);
        return docIds;
    } catch (error) {
        console.error("Error adding documents: ", error);
        throw error; // Re-throw the error for handling in calling code
    }
};
