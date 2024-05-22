import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.year}>© 2024. All Rights Reserved.</div>
      <Link to="https://sid-chopra.netlify.app/" target="blank">
        My Other projects
      </Link>
    </div>
  );
};

export { Footer };
