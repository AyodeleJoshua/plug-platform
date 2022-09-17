import styles from "./TitleBlock.module.css";
const TitleBlock = ({ subRoute }) => {
  return (
    <div className={styles.titleBlockContainer}>
      <div className={styles.crumbs}>
        <p>Acumen Digital Interview Task / Elephantom</p>
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
    </div>
  );
};

export default TitleBlock;
