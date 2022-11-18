import { PagButton } from "./Button";
import prevImg from "images/arr-prev.svg";
import nextImg from "images/arr-next.svg";
import styles from "./Pagination.module.css";
import { FC } from "react";

interface IProps {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  totalPages: number;
}

export const Pagination: FC<IProps> = ({ page, setPage, totalPages }) => {
  return (
    <div className={styles.wrapper}>
      <button
        onClick={() => setPage((page) => page - 1)}
        disabled={page === 1}
        className={`${styles.prevBtn} ${page === 1 ? "s:opacity-30" : ""}`}
      >
        <img src={prevImg} alt="prev" />
      </button>

      {page - 4 > 0 && <PagButton onClick={() => setPage(1)} value={1} />}

      {page - 3 > 0 && (
        <PagButton
          onClick={() => setPage((page) => page - 3)}
          value={page <= 4 ? page - 3 : "..."}
        />
      )}

      {page - 2 > 0 && (
        <PagButton
          onClick={() => setPage((page) => page - 2)}
          value={page - 2}
        />
      )}

      {page - 1 > 0 && (
        <PagButton
          onClick={() => setPage((page) => page - 1)}
          value={page - 1}
        />
      )}

      <PagButton value={page} disabled active />

      {totalPages >= page + 1 && (
        <PagButton
          onClick={() => setPage((page) => page + 1)}
          value={page + 1}
        />
      )}

      {totalPages >= page + 2 && page !== 4 && (
        <PagButton
          onClick={() => setPage((page) => page + 2)}
          value={page + 2}
        />
      )}

      {page <= 2 && totalPages >= 5 && (
        <PagButton
          onClick={() => setPage((page) => page + 3)}
          value={page + 3}
        />
      )}

      {page === 1 && totalPages >= 5 && (
        <PagButton
          onClick={() => setPage((page) => page + 4)}
          value={page + 4}
        />
      )}

      {totalPages >= page + 3 && (
        <PagButton
          onClick={() => setPage((page) => page + 3)}
          value={page === totalPages - 3 ? totalPages : "..."}
        />
      )}

      {totalPages >= page + 4 && (
        <PagButton onClick={() => setPage(totalPages)} value={totalPages} />
      )}

      <button
        onClick={() => setPage((page) => page + 1)}
        disabled={page === totalPages}
        className={
          styles.nextBtn + ` ${page === totalPages ? "s:opacity-30" : ""}`
        }
      >
        <img src={nextImg} alt="next" />
      </button>
    </div>
  );
};
