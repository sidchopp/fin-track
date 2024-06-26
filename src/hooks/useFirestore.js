import { useReducer } from "react";
import { projectFirestore, timestamp } from "../firebase/config";

let initialState = {
  success: null,
  isPending: false,
  error: null,
  document: null,
};

const firestoreReducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return { success: false, isPending: true, error: null, document: null };
    case "ADDED_DOCUMENT":
      return {
        success: true,
        isPending: false,
        error: null,
        document: action.payload,
      };
    case "DELETED_DOCUMENT":
      return {
        success: true,
        isPending: false,
        error: null,
        document: null,
      };
    case "ERROR":
      return {
        success: false,
        isPending: false,
        error: action.payload,
        document: null,
      };
    default:
      return state;
  }
};

export const useFirestore = (collection) => {
  const [response, dispatch] = useReducer(firestoreReducer, initialState);

  // A reference to our collection in fire store DB
  const ref = projectFirestore.collection(collection);

  //  dispatch
  const dispatchIfNotCancelled = (action) => {
    dispatch(action);
  };

  // add a document
  const addDocument = async (doc) => {
    dispatch({ type: "IS_PENDING" });

    try {
      const createdAt = timestamp.fromDate(new Date());
      const addedDocument = await ref.add({ ...doc, createdAt });
      dispatchIfNotCancelled({
        type: "ADDED_DOCUMENT",
        payload: addedDocument,
      });
    } catch (err) {
      dispatchIfNotCancelled({ type: "ERROR", payload: err.message });
    }
  };

  // delete a document
  const deleteDocument = async (id) => {
    dispatch({ type: "IS_PENDING" });

    try {
      await ref.doc(id).delete();
      dispatchIfNotCancelled({
        type: "DELETED_DOCUMENT",
      });
    } catch (error) {
      dispatchIfNotCancelled({
        type: "ERROR",
        payload: "Could not be deleted!",
      });
    }
  };

  return { addDocument, deleteDocument, response };
};
