import saveImg from "images/save.svg";
import savedImg from "images/saved.svg";
import shareImg from "images/share.svg";
import { useState } from "react";
import styles from "./Controls.module.css";

export const Controls = () => {
  const [isSaved, setIsSaved] = useState(false);
  return (
    <div className={styles.controlsWrapper}>
      <button
        type="button"
        className="mr-9 hover:scale-100"
        onClick={() => setIsSaved((prev) => !prev)}
      >
        <img
          src={isSaved ? savedImg : saveImg}
          className={styles.btnImg}
          alt=""
        />
        {isSaved ? "Remove from my list" : "Save to my list"}
      </button>
      <button type="button" className="hover:scale-100">
        <img src={shareImg} className={styles.btnImg} alt="" />
        Share
      </button>
    </div>
  );
};
