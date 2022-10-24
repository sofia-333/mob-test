import { useQuery } from "react-query";
import { KEY_FETCH_CONTRACTORS } from "../constants";
import axios from "axios";


export const ROOT = "http://localhost:8000";


export const useFetchContractorApplications = () => {
  
    useQuery(
      KEY_FETCH_CONTRACTORS,
      async () => {
        const url = ROOT + "";
        const { data } = await axios.get(url);
        return data;
      },
    );

  };