import PageLayout from "../../layout";
import styles from "./Home.module.css";
import { Table } from "../../common";
import { useQuery } from "react-query";
import getData from "../../services/api/getData";
const Home = () => {
  const tableHeader = ["S/N", "Name", "Species", "Sex", "Afiliation", "Dob"];
  const { isLoading, error, data } = useQuery("elephantData", () =>
    getData('/elephants/asian').then(res => res.json())
  );

  return (
    <PageLayout>
      <div className={styles.homepage}>
        <Table
          isLoadingData={isLoading}
          title="All Elephants"
          header={tableHeader}
          data={data?.data}
        />
      </div>
    </PageLayout>
  );
};

export default Home;
