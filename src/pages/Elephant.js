import { useParams } from "react-router-dom";
import ElephantomDetails from "../modules/ElephantomDetails";
const Elephant = () => {
  const { id } = useParams();
  return <ElephantomDetails id={id} />;
};

export default Elephant;
