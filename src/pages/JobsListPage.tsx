import { JobsList } from "components/JobsList/JobsList";
import { Pagination } from "components/Pagination/Pagination";
import { data } from "data";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const JobsListPage = () => {
  const { pathname, search } = useLocation();
  const queryPage = Number(new URLSearchParams(search).get("page"));
  const [page, setPage] = useState(queryPage || 1);
  const navigate = useNavigate();
  // const { data, status, totalPages } = useFetch<IVacancy>(fetchVacancies, page);
  useEffect(() => {
    navigate(`/jobs?page=${page}`, { replace: true });
  }, [page, navigate]);

  return (
    <div className="bg-[#e6e9f2]">
      <div className="l:container l:mx-auto p-[9px] pb-6 m:pb-9">
        <JobsList items={data} location={pathname + search} />
        <Pagination page={page} setPage={setPage} totalPages={18} />
      </div>
    </div>
  );
};
