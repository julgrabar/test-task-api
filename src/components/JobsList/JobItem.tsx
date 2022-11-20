import locImg from "images/location.svg";
import { formatDate } from "helpers/formatDate";
import { Link } from "react-router-dom";
import { IVacancy } from "types/types";
import saveImg from "images/save.svg";
import savedImg from "images/saved.svg";
import { FC, useState } from "react";
import star from "images/star.svg";
import styles from "./JobList.module.css";
import { saveVacancy, unsaveVacancy } from "services/api-service";
import loadingImg from "images/loader.gif";

interface IProps {
  job: IVacancy;
  location: string;
  refetch: React.Dispatch<React.SetStateAction<boolean>>;
}

export const JobItem: FC<IProps> = ({ job, location, refetch }) => {
  const [isSavingLoad, setIsSavingLoad] = useState(false);
  const {
    title,
    name,
    address,
    created_at: createdAt,
    id,
    avatar,
    is_in_favorites: isSaved,
    favorites_id: favId,
  } = job;

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
    <>
      <div className={styles.wrapper}>
        <button
          type="button"
          className="hidden m:block hover:scale-110"
          onClick={() => handleSaveBtn()}
          disabled={isSavingLoad}
        >
          <img
            width="16"
            height="20"
            src={isSavingLoad ? loadingImg : isSaved ? savedImg : saveImg}
            alt="save"
          />
        </button>
        <Rating value={job.rating} />
        <span className={styles.publicationDate}>{formatDate(createdAt)}</span>
      </div>
      <div className="flex mr-8">
        <img alt="company" src={avatar} className={styles.avatar} />
        <div className={styles.jobInfo}>
          <Link
            to={`/jobs/${id}`}
            state={{ from: location }}
            className={styles.title}
          >
            {title}
          </Link>
          <p className="mb-[7px]">{`Department name • ${name}`}</p>
          <p>
            <img src={locImg} alt="location" className="inline mr-2" />
            {address}
          </p>
        </div>
      </div>
    </>
  );
};

const Rating: FC<{ value: number }> = ({ value }) => {
  const arr = new Array(value).fill("star");
  return (
    <div className={styles.rating}>
      {arr.map((_, ind) => (
        <img src={star} alt="star" key={ind} />
      ))}
    </div>
  );
};
