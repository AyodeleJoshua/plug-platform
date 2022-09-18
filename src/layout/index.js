import { useEffect, useState } from "react";
import styles from "./Layout.module.css";
import Sidebar from "./sidebar";
import Main from "./main";
import useWindowSize  from "../utils/customHooks/useWindowSize";
const PageLayout = ({ subRoute, children }) => {
  const [showSideBar, setShowSideBar] = useState(true);
  const [width, height] = useWindowSize();

  useEffect(() => {
    if (width > 768) {
      setShowSideBar(true);
    }
  }, [width, height]);
  return (
    <div className={styles.layout}>
      <Sidebar showSideBar={showSideBar} setShowSideBar={setShowSideBar} />
      <Main subRoute={subRoute} setShowSideBar={setShowSideBar}>
        {children}
      </Main>
    </div>
  );
};

export default PageLayout;
