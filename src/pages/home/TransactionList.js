import { useFirestore } from "../../hooks/useFirestore";
import styles from "./Home.module.css";

function TransactionList({ transactions }) {
  const { deleteDocument } = useFirestore("transactions");
  console.log(transactions);
  return (
    <div className={styles.transactions}>
      <h3>My Transactions</h3>
      {transactions.length === 0 && (
        <p className={styles.myTransactions}>
          You have no transaction yet. You have to add a transaction first.
        </p>
      )}
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <p className={styles.name}>{transaction.name}</p>
            <p className={styles.amount}>${transaction.amount}</p>
            <button onClick={() => deleteDocument(transaction.id)}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export { TransactionList };
