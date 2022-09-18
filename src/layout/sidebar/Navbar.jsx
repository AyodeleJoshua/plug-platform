import { useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
const Navbar = ({ name, activeNav, link, to, setActiveNav }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`${styles.navbar} ${
        activeNav === name ? `${styles.active}` : ""
      } ${link ? `${styles.pointer}` : ""}`}
      onClick={() => {
        if (link) {
          navigate(to);
        }
        setActiveNav && setActiveNav(name);
      }}
    >
      {name}
    </div>
  );
};

export default Navbar;
