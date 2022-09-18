import Skeleton from "react-loading-skeleton";

const ElephantomDetailsLoadingSkeleton = () => {
  return (
    <>
      <Skeleton height="200px" width="100%" baseColor="#a8a5a5" style={{marginBottom: "10px"}} />
      <Skeleton width="70%" baseColor="#a8a5a5" style={{marginBottom: "10px"}} />
      <Skeleton count={3} baseColor="#a8a5a5" style={{marginBottom: "10px"}} />
    </>
  );
};

export default ElephantomDetailsLoadingSkeleton;
