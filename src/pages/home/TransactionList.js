import styles from "./Home.module.css";

function TransactionList({ transactions }) {
  return (
    <>
      <h3>My Transactions</h3>
      <ul className={styles.transactions}>
        {transactions.map((transaction) => (
          <li key={transaction.id}>
            <p className={styles.name}>{transaction.name}</p>
            <p className={styles.amount}>${transaction.amount}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export { TransactionList };
