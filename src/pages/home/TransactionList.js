import { Dialog } from "../../components";
import styles from "./Home.module.css";

function TransactionList({ transactions }) {
  return (
    <div className={styles.transactions}>
      <h3>My Transactions</h3>
      {transactions.length === 0 && (
        <p className={styles.myTransactions}>Please add a transaction first.</p>
      )}
      <ul>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <p className={styles.name}>{transaction.name}</p>
            <p className={styles.amount}>${transaction.amount}</p>
            <Dialog transactionId={transaction.id} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export { TransactionList };
