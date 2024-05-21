import { useFirestore } from "../../hooks/useFirestore";

const Dialog = ({ transactionId }) => {
  const { deleteDocument } = useFirestore("transactions");
  return (
    <button
      onClick={() =>
        window.confirm(
          "Are you sure? This action will permanently delete this transaction."
        ) && deleteDocument(transactionId)
      }
    >
      x
    </button>
  );
};

export { Dialog };
