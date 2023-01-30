import {useQuery} from "react-query";
import {KEY_FETCH_CONTRACTORS} from "../constants";
import axios from "axios";


export const ROOT = "http://localhost:8000";


export const useFetchContractorApplications = () => {
    return useQuery(
        KEY_FETCH_CONTRACTORS,
        async () => {
            const url = ROOT + "/api/testapp/contractor-applications/";
            return await axios.get(url).then((res) => {
                if (res && res.data && res.data.results)
                    return res.data.results;
                return []
            });
        },
    )
};