import { useState, useEffect, useCallback } from "react";

export const statusList = {
  IDLE: "idle",
  LOADING: "loading",
  ERR: "error",
  SUCCESS: "success",
};

export const useFetch = <T, Q>(
  callback: (arg: Q) => Promise<{ data: T; totalItems: number }>,
  arg: Q
) => {
  const [data, setData] = useState<T | null>(null);
  const [status, setStatus] = useState(statusList.IDLE);
  const [totalItems, setTotalItems] = useState(0);
  const [isRefetch, setIsRefetch] = useState(false);

  const fetchData = useCallback(async () => {
    try {
      setStatus(statusList.LOADING);
      const result = await callback(arg);
      setTotalItems(result.totalItems);
      setData(result.data);
      setStatus(statusList.SUCCESS);
    } catch (error) {
      console.log(error);
      setStatus(statusList.ERR);
    } finally {
      setIsRefetch(false);
    }
  }, [callback, arg]);

  const refetch = useCallback(async () => {
    try {
      const result = await callback(arg);
      setTotalItems(result.totalItems);
      setData(result.data);
    } catch (error) {
      console.log(error);
      setStatus(statusList.ERR);
    } finally {
      setIsRefetch(false);
    }
  }, [callback, arg]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (isRefetch) {
      refetch();
    }
  }, [isRefetch, refetch]);

  return { data, status, totalItems, setIsRefetch };
};
