import { formatDate } from "helpers/formatDate";
import { FC } from "react";
import { IVacancy } from "types/types";
import styles from "./JobHeadSection.module.css";

export const JobHeadSection: FC<{ job: IVacancy }> = ({
  job: { title, createdAt, salary },
}) => {
  return (
    <div className={styles.wrapper}>
      <span className={styles.title}>{title}</span>

      <span className={styles.publicationDate}>{formatDate(createdAt)}</span>
      <div className="text-right m:text-left m:grid">
        <p>Brutto, per year</p>
        <p className={styles.salary}>€{salary.replaceAll("k", "000")}</p>
      </div>
    </div>
  );
};
