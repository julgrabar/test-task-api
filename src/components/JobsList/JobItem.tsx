import locImg from "images/location.svg";
import { formatDate } from "helpers/formatDate";
import { Link } from "react-router-dom";
import { IVacancy } from "types/types";
import saveImg from "images/save.svg";
import savedImg from "images/saved.svg";
import { FC, useState } from "react";
import star from "images/star.svg";
import styles from "./JobList.module.css";

interface IProps {
  job: IVacancy;
  location: string;
}

export const JobItem: FC<IProps> = ({ job, location }) => {
  const { pictures, title, name, address, createdAt, id } = job;
  const [isSaved, setIsSaved] = useState(false);

  return (
    <>
      <div className={styles.wrapper}>
        <button
          type="button"
          className="hidden m:block hover:scale-110"
          onClick={() => setIsSaved((prev) => !prev)}
        >
          <img
            width="16"
            height="20"
            src={isSaved ? savedImg : saveImg}
            alt="save"
          />
        </button>
        <Rating value={5} />
        <span className={styles.publicationDate}>{formatDate(createdAt)}</span>
      </div>
      <div className="flex mr-8">
        <img alt="company" src={pictures[0]} className={styles.avatar} />
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
      {arr.map(() => (
        <img src={star} alt="star" />
      ))}
    </div>
  );
};
