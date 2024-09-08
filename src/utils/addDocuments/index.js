import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase";

export const addMultipleDocuments = async (collectionName, documents) => {
    try {
        const docIds = [];
        for (const docData of documents) {

            const { busId, ...data } = docData;
            const docRef = doc(collection(db, collectionName), busId);
            await setDoc(docRef, data);
            docIds.push(busId);
        }
        console.log("Documents added with IDs: ", docIds);
        return docIds;
    } catch (error) {
        console.error("Error adding documents: ", error);
        throw error; 
    }
};
