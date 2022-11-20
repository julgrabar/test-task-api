import { JobsList } from "components/JobsList/JobsList";
import { Pagination } from "components/Pagination/Pagination";
import { statusList, useFetch } from "hooks/fetchingHook";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchVacancies } from "services/api-service";
import { IVacancy } from "types/types";
import loadingImg from "images/loader.gif";

export const JobsListPage = () => {
  const { pathname, search } = useLocation();
  const queryPage = Number(new URLSearchParams(search).get("page"));
  const [page, setPage] = useState(queryPage || 1);
  const navigate = useNavigate();
  const { data, totalItems, status, setIsRefetch } = useFetch<
    IVacancy[],
    number
  >(fetchVacancies, page);
  const itemsPerPage = 20;

  useEffect(() => {
    navigate(`/jobs?page=${page}`, { replace: true });
  }, [page, navigate]);

  return (
    <div className="bg-[#e6e9f2] min-h-screen">
      <div className="l:container l:mx-auto p-[9px] pb-6 m:pb-9">
        {status === statusList.SUCCESS && (
          <>
            {" "}
            <JobsList
              items={data || []}
              location={pathname + search}
              refetch={setIsRefetch}
            />
            <Pagination
              page={page}
              setPage={setPage}
              totalPages={totalItems / itemsPerPage}
            />
          </>
        )}
        {status === statusList.LOADING && (
          <img
            src={loadingImg}
            alt="Loading..."
            className="block mx-auto h-[50px] w-[50px]"
          />
        )}
        {status === statusList.ERR && (
          <p className="text-center">
            Something went wrong... Try to reload the page.
          </p>
        )}
      </div>
    </div>
  );
};
