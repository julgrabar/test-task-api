import saveImg from "images/save.svg";
import savedImg from "images/saved.svg";
import shareImg from "images/share.svg";
import { useState } from "react";
import styles from "./Controls.module.css";
import { FC } from "react";
import { saveVacancy, unsaveVacancy } from "services/api-service";
import loadingImg from "images/loader.gif";

interface IProps {
  refetch: React.Dispatch<React.SetStateAction<boolean>>;
  id: number;
  favId: number;
  isSaved: boolean;
}

export const Controls: FC<IProps> = ({ isSaved, refetch, id, favId }) => {
  const [isSavingLoad, setIsSavingLoad] = useState(false);

  const handleSaveBtn = async () => {
    try {
      setIsSavingLoad(true);
      isSaved ? await unsaveVacancy(favId) : await saveVacancy(id);
      refetch(true);
    } catch (error) {
      console.log(error);
    } finally {
      setIsSavingLoad(false);
    }
  };
  return (
    <div className={styles.controlsWrapper}>
      <button
        type="button"
        className="mr-9"
        onClick={() => handleSaveBtn()}
        disabled={isSavingLoad}
      >
        <img
          src={isSavingLoad ? loadingImg : isSaved ? savedImg : saveImg}
          className={styles.btnImg}
          alt=""
        />
        {isSaved ? "Remove from my list" : "Save to my list"}
      </button>
      <button type="button">
        <img src={shareImg} className={styles.btnImg} alt="" />
        Share
      </button>
    </div>
  );
};
