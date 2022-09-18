import React from "react";
import styles from "./Main.module.css";
import TitleBlock from "./TitleBlock";

const Main = ({ subRoute, children, setShowSideBar }) => {
  return (
    <main className={styles.mainContainer}>
      <TitleBlock subRoute={subRoute} setShowSideBar={setShowSideBar} />
      <div className={styles.childrenContainer}>{children}</div>
    </main>
  );
};

export default Main;
