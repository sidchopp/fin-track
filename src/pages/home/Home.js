import styles from "./Home.module.css";
import { TransactionForm } from "./Transaction";

function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.content}>My Transactions</div>
      <div className={styles.sidebar}>
        <TransactionForm />
      </div>
    </div>
  );
}

export default Home;
