import styles from "./Navbar.module.css";
const Navbar = ({ name, active }) => {
  return <div className={styles.navbar}>{name}</div>;
};

export default Navbar;
