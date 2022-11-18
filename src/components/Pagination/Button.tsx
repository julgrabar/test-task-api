import { MouseEventHandler, ReactChild } from "react";
import styles from "./Pagination.module.css";
interface IProps {
  onClick?: MouseEventHandler;
  value?: string | number;
  disabled?: boolean;
  children?: ReactChild;
  active?: boolean;
}

export const PagButton: React.FC<IProps> = ({
  value,
  disabled,
  onClick,
  children,
  active,
}) => {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`py-3 px-2 ${active ? styles.btn : ""}`}
    >
      {value || children}
    </button>
  );
};
