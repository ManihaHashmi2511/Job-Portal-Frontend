import { setAllJobs } from "@/redux/jobSlice";
import { store } from "@/redux/Store";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function useGetAllJobs() {
  const dispatch = useDispatch();
  const { searchedQuery } = useSelector((store) => store.job);
  useEffect(() => {
    // Function to fetch all jobs from the backend
    const fetchAllJobs = async () => {
      try {
        const res = await axios.get(
          `http://localhost:8000/api/jobs/get?keywords=${searchedQuery}`,
          { withCredentials: true }
        );
        if (res.status === 200) {
          dispatch(setAllJobs(res.data.jobs));
        }
      } catch (error) {
        console.error("Error fetching jobs:", error);
        if (error.response && error.response.status === 404) {
          dispatch(setAllJobs([]));
        }
      }
    };
    fetchAllJobs();
  }, [searchedQuery]);
}
