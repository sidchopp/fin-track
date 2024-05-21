import { TransactionForm } from "./TransactionForm";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useCollection } from "../../hooks/useCollection";
import { TransactionList } from "./TransactionList";
import styles from "./Home.module.css";

function Home() {
  const { user } = useAuthContext();
  const { documents, error } = useCollection("transactions"); // transactions - name of document in fire store DB

  return (
    <div className={styles.container}>
      <div className={styles.content}>My Transactions</div>
      {error && <p>{error}</p>}
      {documents && <TransactionList transactions={documents} />}
      <div className={styles.sidebar}>
        <TransactionForm uid={user.uid} />
      </div>
    </div>
  );
}

export default Home;
