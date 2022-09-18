import { useQuery } from "react-query";
import PageLayout from "../../layout";
import styles from "./ElephantDetails.module.css";
import getData from "../../services/api/getData";
import ElephantomDetailsLoadingSkeleton from "./components/ElephantomDetailsLoadingSkeleton";

const ElephantomDetails = ({ id }) => {
  const {
    isLoading: isLoadingElephantData,
    error: errorLoadingElephantData,
    data: elephantData,
  } = useQuery(`elephantData${id}`, () =>
    getData(`/elephants/id/${id}`).then((res) => res.json())
  );
  const elephantDetailsResponse = elephantData?.data;
  if (errorLoadingElephantData || elephantData?.error) {
    return (
      <PageLayout subRoute={true}>
        <div className={styles.elephantDetailsContainer}>
          <h1>Oops! Something went wrong</h1>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout subRoute={true}>
      <div className={styles.elephantDetailsContainer}>
        {isLoadingElephantData  ? (
          <ElephantomDetailsLoadingSkeleton />
        ) : (
          <div>
            <div className={styles.elephantImageContainer}>
              <img
                src={elephantDetailsResponse.image}
                alt={elephantDetailsResponse.name}
                className={styles.elephantImage}
              />
            </div>
            <div className={styles.elephantDetails}>
              <p className={styles.elephantName}>
                {elephantDetailsResponse.name}{" "}
                <span className={styles.gender}>
                  {elephantDetailsResponse.sex}
                </span>
              </p>
              <p className={styles.description}>
                {elephantDetailsResponse.note}
              </p>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
};

export default ElephantomDetails;
