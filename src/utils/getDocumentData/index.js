import { doc, getDoc } from "firebase/firestore";
import { db } from "../../services/firebase";

async function getDocumentData(collectionName, documentId) {
    try {
        // Create a reference to the document
        const docRef = doc(db, collectionName, documentId);

        // Fetch the document snapshot
        const docSnap = await getDoc(docRef);

        // Check if the document exists
        if (docSnap.exists()) {
            // Return the document data
            return docSnap.data();
        } else {
            console.log("No such document!");
            return null;
        }
    } catch (error) {
        console.error("Error getting document:", error);
        throw error;
    }
}


export default getDocumentData