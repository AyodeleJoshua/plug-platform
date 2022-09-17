import styles from "./TablePagination.module.css";
const TablePagination = ({ totalPages, currPage, setCurPage }) => {
  const totalPagesArray = new Array(totalPages).fill(null);

  return (
    <div className={styles.tablePaginationContainer}>
      <p className={styles.tablePaginationNumber}>
        PAGE {currPage} OF {totalPages}
      </p>
      <div>
        <button
          className={styles.paginationButton}
          onClick={() => setCurPage(currPage - 1)}
          disabled={currPage <= 1}
        >
          &lt;
        </button>
        {totalPagesArray.map((item, index) => (
          <button
            key={index}
            className={`${styles.paginationButton} ${
              index === currPage - 1 ? styles.activeButton : ""
            }`}
            onClick={() => setCurPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
        <button
          className={`${styles.paginationButton}`}
          onClick={() => setCurPage(currPage + 1)}
          disabled={currPage >= totalPages}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default TablePagination;
