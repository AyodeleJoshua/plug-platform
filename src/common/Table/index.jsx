import { useState, startTransition } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useNavigate } from "react-router-dom";
import styles from "./Table.module.css";
import TablePagination from "./TablePagination";

const Table = ({ title, header, data, isLoadingData }) => {
  const [currPage, setCurPage] = useState(1);
  const navigate = useNavigate();
  const loadingStateSkeletonRow = new Array(10).fill(null);
  return (
    <div className={styles.tableContainer}>
      {title && <p className={styles.tableTitle}>{title}</p>}
      <div className={styles.tableResponsiveContainer}>
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
          {isLoadingData ? (
            <tbody>
              {loadingStateSkeletonRow.map((item, index) => (
                <tr className={`${styles.bodyRow} `} key={index}>
                  {header.map((item, index) => (
                    <td className={styles.tableData} key={index}>
                      <Skeleton height="20px" width="70%" />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          ) : (
            <tbody>
              {data
                .slice((currPage - 1) * 8, currPage * 8)
                .map((item, index) => (
                  <tr
                    key={item["_id"]}
                    className={`${styles.bodyRow} ${
                      (index + 1) % 2 === 0 ? `${styles.bodyRowEven}` : ""
                    }`}
                    onClick={() => {
                      startTransition(() => {
                        navigate(`/elephant/${item["_id"]}`);
                      });
                      // set active nav to elephant
                    }}
                  >
                    <td
                      className={`${styles.tableData} ${styles.tableBodyData}`}
                    >
                      {currPage === 1
                        ? index + 1
                        : index + 1 + (currPage - 1) * 8}
                    </td>
                    <td
                      className={`${styles.tableData} ${styles.tableBodyData}`}
                    >
                      {item.name}
                    </td>
                    <td
                      className={`${styles.tableData} ${styles.tableBodyData}`}
                    >
                      {item.species}
                    </td>
                    <td
                      className={`${styles.tableData} ${styles.tableBodyData}`}
                    >
                      {item.sex}
                    </td>
                    <td
                      className={`${styles.tableData} ${styles.tableBodyData}`}
                    >
                      {item.affiliation}
                    </td>
                    <td
                      className={`${styles.tableData} ${styles.tableBodyData}`}
                    >
                      {item.dob}
                    </td>
                  </tr>
                ))}
            </tbody>
          )}
        </table>
      </div>
      {!isLoadingData && (
        <TablePagination
          totalPages={Math.ceil(data.length / 8)}
          currPage={currPage}
          setCurPage={setCurPage}
        />
      )}
    </div>
  );
};

export default Table;
