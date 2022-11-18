import { useState, useEffect } from "react";

export const statusList = {
  IDLE: "idle",
  LOADING: "loading",
  ERR: "error",
};

export const useFetch = <T>(
  callback: (page: number) => Promise<T[]>,
  page: number
) => {
  const [data, setData] = useState<T[]>([]);
  const [status, setStatus] = useState(statusList.IDLE);
  // const [totalPages, setTotalPages] = useState(0);
  const totalPages = 18;

  useEffect(() => {
    const fetchData = async () => {
      setStatus(statusList.LOADING);
      try {
        const result = await callback(page);
        setData(result);
      } catch (error) {
        console.log(error);
        setStatus(statusList.ERR);
      } finally {
        setStatus(statusList.IDLE);
      }
    };
    fetchData();
  }, [callback, page]);

  return { data, status, totalPages };
};
