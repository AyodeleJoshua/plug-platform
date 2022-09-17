import React from "react";
import styles from "./Main.module.css";
import TitleBlock from "./TitleBlock";

const Main = ({ subRoute, children }) => {
  return (
    <main className={styles.mainContainer}>
      <TitleBlock subRoute={subRoute} />
      {children}
    </main>
  );
};

export default Main;
