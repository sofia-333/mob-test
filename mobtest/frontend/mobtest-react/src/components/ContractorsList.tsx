import React from "react";

function ContractorsList({contractorApplications}: any) {
    return <div>
        {contractorApplications.length > 0 ?
            contractorApplications.map((application: any, index: number) => (
                <div key={index} className="flex border-b border-t border-solid border-slate-100 mb-2 rounded-lg shadow-gray-100 shadow">
                    <div className="flex flex-col py-1 w-1/3 bg-gray-100 rounded-l-lg pl-3">
                        <div className="px-1 flex-row text-slate-700 fa-bold">{application.contractor.user.username}</div>
                        <div className="px-1 flex-row text-slate-500 text-sm">{application.job_name}</div>
                    </div>
                    <div className="flex flex-col py-1 w-1/5 pl-3">
                        <div className="px-1 flex-row text-slate-700 text-xs">Pay Rate</div>
                        <div className="px-1 flex-row text-slate-500 text-sm">{application.contractor.pay_rate}</div>
                    </div>
                    <div className="flex flex-col py-1 w-1/5 pl-3">
                        <div className="px-1 flex-row text-slate-700 text-xs">Start Date</div>
                        <div className="px-1 flex-row text-slate-500 text-sm">{application.start_date}</div>
                    </div>
                    <div className="flex flex-col py-1 w-1/5 pl-3">
                        <div className="px-1 flex-row text-slate-700 text-xs">End Date</div>
                        <div className="px-1 flex-row text-slate-500 text-sm">{application.end_date}</div>
                    </div>
                </div>
            )) : <div>...Loading...</div>
        } </div>
}

export default ContractorsList;