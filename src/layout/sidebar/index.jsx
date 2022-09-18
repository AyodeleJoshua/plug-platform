import Navbar from "./Navbar";
import styles from "./Sidebar.module.css";

const Sidebar = ({ showSideBar }) => {
  return (
    <aside className={`${styles.sidebarContainer} ${!showSideBar ? `${styles.hideSidebar}` : ""}`}>
      <div className={styles.logoContainer}>
        <img
          src={require("../../assets/icons/elephant-logo.svg").default}
          alt="elephant-logo-icon"
        />
      </div>
      <nav>
        <Navbar name="Home" active={true} />
        <Navbar name="Elephant" />
      </nav>
    </aside>
  );
};

export default Sidebar;
