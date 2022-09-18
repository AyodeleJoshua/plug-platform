import { Link } from "react-router-dom";
import styles from "./TitleBlock.module.css";
const TitleBlock = ({ subRoute, setShowSideBar }) => {
  return (
    <div className={styles.titleBlockContainer}>
      <div className={styles.crumbs}>
        <Link to="/" className={styles.crumbItemToHome}>Acumen Digital Interview Task / Elephantom</Link>
        {subRoute && (
          <div className={styles.subrouteCrumbs}>
            <img
              src={require("../../assets/icons/greater-than-icon.svg").default}
              alt="greater-than-icon"
              className={styles.greaterThanIcon}
            />
            <p>Elephant</p>
          </div>
        )}
      </div>
      <button
        className={styles.burger}
        onClick={() => setShowSideBar((showSideBar) => !showSideBar)}
      >
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </button>
    </div>
  );
};

export default TitleBlock;
