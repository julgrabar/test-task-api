import React from "react";
import "./styles/output.css";
import { Route, Routes } from "react-router-dom";
import { JobsListPage } from "pages/JobsListPage";
import { Layout } from "Layout";
import { JobDetailsPage } from "pages/DetailsPage/JobDetailsPage";
import { NotFoundPage } from "pages/NotFoundPage";

function App() {
  return (
    <Routes>
      <Route path="/jobs" element={<Layout />}>
        <Route index element={<JobsListPage />} />
        <Route path=":jobId" element={<JobDetailsPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default App;
