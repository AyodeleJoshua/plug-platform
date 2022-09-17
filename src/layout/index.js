import styles from "./Layout.module.css";
import Sidebar from "./sidebar";
import Main from "./main";
const PageLayout = ({ subRoute, children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <Main subRoute={subRoute}>{children}</Main>
    </div>
  );
};

export default PageLayout;
