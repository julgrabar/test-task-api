import { FC } from "react";
import { IAdditional } from "types/types";
import styles from "./AddInfoList.module.css";

interface IProps {
  title: string;
  items: IAdditional[];
  styles: {
    fontColor: string;
    borderColor: string;
    bgColor: string;
    marginBottom: string;
  };
}

export const AddInfoList: FC<IProps> = ({
  title,
  items,
  styles: { fontColor, bgColor, borderColor, marginBottom },
}) => {
  return (
    <>
      <h3 className={styles.title}>{title}</h3>
      <ul className={`${marginBottom} flex flex-wrap`}>
        {items.map((item, ind) => (
          <li
            key={ind}
            className={`${styles.addInfoItem} ${borderColor} ${bgColor} ${fontColor}`}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </>
  );
};
