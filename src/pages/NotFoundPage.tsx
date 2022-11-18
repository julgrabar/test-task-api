import notFindImg from "images/not-find.svg";
import arrBackImg from "images/arr-back.svg";
import styles from "./DetailsPage/JobDetailsPage.module.css";
import { useNavigate } from "react-router-dom";

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <div className="container l:mx-auto">
      <img src={notFindImg} alt="" className="w-full max-w-[600px] mx-auto " />
      <p className="text-center">Ooops.. This page doesn't exist.</p>
      <button
        type="button"
        className={`${styles.backBtn} mx-auto block`}
        onClick={() => navigate("/jobs")}
      >
        <img src={arrBackImg} alt="" className="inline mr-5" />
        Go to job board
      </button>
    </div>
  );
};
