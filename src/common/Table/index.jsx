import styles from "./Table.module.css";
const Table = ({ header, data, setTableData }) => {
  return (
    <div className={styles.tableContainer}>
      {header && <p className={styles.tableTitle}>{header}</p>}
      <table></table>
    </div>
  );
};

export default Table;
