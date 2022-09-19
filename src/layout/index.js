import { useEffect, useState } from "react";
import styles from "./Layout.module.css";
import Sidebar from "./sidebar";
import Main from "./main";
import useWindowSize from "../utils/customHooks/useWindowSize";
const PageLayout = ({ subRoute, children, activeNav }) => {
  const [showSideBar, setShowSideBar] = useState(true);
  // const [activeNav, setActiveNav] = useState("Home");
  const [width, height] = useWindowSize();

  useEffect(() => {
    if (width > 768) {
      setShowSideBar(true);
    } else {
      setShowSideBar(false);
    }
  }, [width, height]);
  return (
    <div className={styles.layout}>
      <Sidebar
        showSideBar={showSideBar}
        setShowSideBar={setShowSideBar}
        activeNav={activeNav}
        // setActiveNav={setActiveNav}
      />
      <Main
        subRoute={subRoute}
        setShowSideBar={setShowSideBar}
        // setActiveNav={setActiveNav}
      >
        {children}
      </Main>
    </div>
  );
};

export default PageLayout;
