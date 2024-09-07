import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "../../services/firebase";

export const addMultipleDocuments = async (collectionName, documents) => {
    try {
        const docIds = [];
        for (const docData of documents) {

            const { routeId, ...data } = docData;
            const docRef = doc(collection(db, collectionName), routeId);
            await setDoc(docRef, data);
            docIds.push(routeId);
        }
        console.log("Documents added with IDs: ", docIds);
        return docIds;
    } catch (error) {
        console.error("Error adding documents: ", error);
        throw error; 
    }
};
