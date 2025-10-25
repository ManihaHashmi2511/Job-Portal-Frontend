import { setAllAdminJobs } from '@/redux/jobSlice';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

export default function useGetAllAdminJobs() {

    const dispatch = useDispatch();
  useEffect(() => {
    // Function to fetch all jobs from the backend
    const fetchAllAdminJobs = async () => {
        try {
             const res = await axios.get('http://localhost:8000/api/jobs/getAdminJobs', {withCredentials: true}); 
                if(res.status === 200){
                  dispatch(setAllAdminJobs(res.data.jobs));
                }
        } 
        
        catch (error) {
            console.error("Error fetching jobs:", error);
        }
    };
  fetchAllAdminJobs();

}, []);


}
        
