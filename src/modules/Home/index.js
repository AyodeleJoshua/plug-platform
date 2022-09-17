import { useState } from "react";
import PageLayout from "../../layout";
import styles from "./Home.module.css";
import { Table } from "../../common";
import { tableData as data } from "./data";
const Home = () => {
  const [tableData, setTableData] = useState(data);
  const tableHeader = ["S/N", "Name", "Species", "Sex", "Afiliation", "Dob"];
  return (
    <PageLayout>
      <div className={styles.homepage}>
        <Table
          header={tableHeader}
          data={tableData}
          setTableData={setTableData}
        />
      </div>
    </PageLayout>
  );
};

export default Home;
