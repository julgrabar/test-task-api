import { AddInfoList } from "components/AddInfoList/AddInfoList";
import "leaflet/dist/leaflet.css";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useScreenWidth } from "hooks/screenWidthHook";
import { Gallery } from "components/Gallery/Gallery";
import { Contacts } from "../../components/Contacts/Contacts";
import { makeDescriptionMarkup } from "helpers/makeDescriptionMarkup";
import { JobHeadSection } from "../../components/JobHeadSection/JobHeadSection";
import { Controls } from "../../components/Controls/Controls";
import styles from "./JobDetailsPage.module.css";
import notFindImg from "images/not-find.svg";
import arrBackImg from "images/arr-back.svg";
import { statusList, useFetch } from "hooks/fetchingHook";
import { fetchJob } from "services/api-service";
import { IVacancy } from "types/types";
import loadingImg from "images/loader.gif";

export const JobDetailsPage = () => {
  const screenWidth = useScreenWidth();
  const { jobId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const {
    data: job,
    setIsRefetch,
    status,
  } = useFetch<IVacancy, number>(fetchJob, Number(jobId));

  return (
    <div className={styles.detailsPageContainer}>
      {status === statusList.SUCCESS && job && (
        <>
          <div>
            <header>
              <h1>Job details</h1>
              {screenWidth > 480 && (
                <Controls
                  isSaved={job.is_in_favorites}
                  refetch={setIsRefetch}
                  id={job.id}
                  favId={job.favorites_id}
                />
              )}
            </header>
            {screenWidth <= 480 && (
              <Controls
                isSaved={job.is_in_favorites}
                refetch={setIsRefetch}
                id={job.id}
                favId={job.favorites_id}
              />
            )}

            <button type="button" className={styles.applyBtnHidden}>
              Apply now
            </button>

            <JobHeadSection job={job} />

            <div className="font-[Roboto] text-lg">
              {makeDescriptionMarkup(job.description)}
            </div>

            <button type="button" className={styles.applyBtn}>
              Apply now
            </button>

            {screenWidth <= 800 && <Gallery images={job.pictures} />}

            <h2>Additional info</h2>
            <AddInfoList
              title="Employment type"
              items={job.employment_type}
              styles={{
                fontColor: "text-[#55699E]",
                borderColor: "border-grey-rgba",
                bgColor: "bg-blue-rgba",
                marginBottom: "mb-[22px]",
              }}
            />

            <AddInfoList
              title="Benefits"
              items={job.benefits}
              styles={{
                fontColor: "text-[#988B49]",
                borderColor: "border-[#FFCF00]",
                bgColor: "bg-yellow-rgba",
                marginBottom: "mb-[64px]",
              }}
            />

            {screenWidth > 800 && <Gallery images={job.pictures} />}
            {screenWidth > 800 && (
              <button
                type="button"
                className={styles.backBtn}
                onClick={() => navigate(location.state?.from || "/jobs")}
              >
                <img src={arrBackImg} alt="" className="inline mr-5" />
                Return to job board
              </button>
            )}
          </div>
          {screenWidth <= 800 && <h2>Contacts</h2>}
          <Contacts job={job} />
        </>
      )}

      {status === statusList.LOADING && (
        <img
          src={loadingImg}
          alt="Loading"
          className="block mx-auto h-[50px] w-[50px]"
        />
      )}

      {status === statusList.ERR && (
        <div className="w-full">
          <img
            src={notFindImg}
            alt=""
            className="w-full max-w-[600px] mx-auto "
          />
          <p className="text-center">
            Something went wrong. Try to Reloag the page.
          </p>
          <button
            type="button"
            className={`${styles.backBtn} mx-auto block`}
            onClick={() => navigate(location.state?.from || "/jobs")}
          >
            <img src={arrBackImg} alt="" className="inline mr-5 " />
            Return to job board
          </button>
        </div>
      )}
    </div>
  );
};
