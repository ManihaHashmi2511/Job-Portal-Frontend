import { setSingleCompany } from '@/redux/companySlice';
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';

export default function useGetSingleCompany({companyId}) {

  const dispatch = useDispatch();
  useEffect(() => {
    // Function to fetch all jobs from the backend
    const fetchSingleCompany = async () => {
        try {
             const res = await axios.get(`http://localhost:8000/api/companies/get/${companyId}`, {withCredentials: true}); 
                if(res.status === 200){
                  dispatch(setSingleCompany(res.data.company));
                }
        } 
        
        catch (error) {
            console.error("Error fetching company:", error);
        }
    };
  fetchSingleCompany();

}, [companyId, dispatch]);

}
