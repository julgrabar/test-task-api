import { FC } from "react";
import { IVacancy } from "types/types";
import { JobItem } from "./JobItem";
import styles from "./JobList.module.css";

interface IProps {
  items: IVacancy[];
  location: string;
}

export const JobsList: FC<IProps> = ({ items, location }) => {
  return (
    <ul className="mb-6 s:mb-12">
      {items.map((job) => (
        <li key={job.id} className={styles.jobItem}>
          <JobItem job={job} location={location} />
        </li>
      ))}
    </ul>
  );
};
