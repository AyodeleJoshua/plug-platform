import { useState } from "react";
import styles from "./Table.module.css";
import TablePagination from "./TablePagination";

const Table = ({ title, header, data }) => {
  const [currPage, setCurPage] = useState(1);
  return (
    <div className={styles.tableContainer}>
      {title && <p className={styles.tableTitle}>{title}</p>}
      <table className={styles.table}>
        <thead>
          <tr className={styles.headRow}>
            {header.map((item, index) => (
              <td key={item + index} className={styles.tableData}>
                {item}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.slice((currPage - 1) * 8, currPage * 8).map((item, index) => (
            <tr
              key={item["_id"]}
              className={`${styles.bodyRow} ${
                (index + 1) % 2 === 0 ? `${styles.bodyRowEven}` : ""
              }`}
            >
              <td className={`${styles.tableData} ${styles.tableBodyData}`}>
                {currPage === 1 ? index + 1 : index + 1 + (currPage - 1) * 8}
              </td>
              <td className={`${styles.tableData} ${styles.tableBodyData}`}>
                {item.name}
              </td>
              <td className={`${styles.tableData} ${styles.tableBodyData}`}>
                {item.species}
              </td>
              <td className={`${styles.tableData} ${styles.tableBodyData}`}>
                {item.sex}
              </td>
              <td className={`${styles.tableData} ${styles.tableBodyData}`}>
                {item.affiliation}
              </td>
              <td className={`${styles.tableData} ${styles.tableBodyData}`}>
                {item.dob}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <TablePagination
        totalPages={Math.ceil(data.length / 8)}
        currPage={currPage}
        setCurPage={setCurPage}
      />
    </div>
  );
};

export default Table;
