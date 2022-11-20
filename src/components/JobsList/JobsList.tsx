import { FC } from "react";
import { IVacancy } from "types/types";
import { JobItem } from "./JobItem";
import styles from "./JobList.module.css";

interface IProps {
  items: IVacancy[];
  location: string;
  refetch: React.Dispatch<React.SetStateAction<boolean>>;
}

export const JobsList: FC<IProps> = ({ items, location, refetch }) => {
  return (
    <ul className="mb-6 m:mb-12">
      {items.map((job) => (
        <li key={job.id} className={styles.jobItem}>
          <JobItem job={job} location={location} refetch={refetch} />
        </li>
      ))}
    </ul>
  );
};
