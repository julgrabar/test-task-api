import { FC } from "react";
import styles from "./Gallery.module.css";

export const Gallery: FC<{ images: string[] }> = ({ images }) => {
  return (
    <>
      <h2>Attached images</h2>
      <ul className={styles.galleryList}>
        {images.map((img, idx) => (
          <li key={idx}>
            <img src={img} alt="" />
          </li>
        ))}
      </ul>
    </>
  );
};
