import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <h3>
        Finance Tracker
        <span> © 2024. All Rights Reserved.</span>
      </h3>
      <Link to="https://sid-projects.netlify.app/" target="blank">
        My Other projects
      </Link>
    </div>
  );
};

export { Footer };
