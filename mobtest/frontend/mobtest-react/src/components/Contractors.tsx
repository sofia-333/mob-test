import {useFetchContractorApplications} from "../api/api";
import React, {useEffect} from "react";
import ContractorsList from "./ContractorsList";
import Skeleton from "./Skeleton";

const Contractors = () => {

    const [contractorApplications, setContractorApplications] = React.useState([]);
    const {data} = useFetchContractorApplications()
    useEffect(() => {
        if (data) {
            setContractorApplications(data);
        }
    }, [data])

    return <>
        {contractorApplications.length > 0 ?
            <ContractorsList contractorApplications={contractorApplications}></ContractorsList>
            :
            <Skeleton></Skeleton>
        }
    </>

}

export default Contractors;
