import ModalButton from "./ModalButton";
import {Dispatch, SetStateAction, useEffect} from "react";
import Contractors from "./Contractors";
import {useFetchContractorApplications} from "../api/api";

type modalProps = {
    setShowModal: Dispatch<SetStateAction<boolean>>
}

function Modal({...modalProps}) {

    return <div
        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
        <div className="relative mx-auto max-w-3xl w-3/4">
            <div
                className="rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="text-2xl font-semibold">
                        Contractor Applications
                    </h3>
                    <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => modalProps.setShowModal(false)}>
                        <span
                            className=" text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                    </button>
                </div>
                <div className="relative px-6 pb-4 flex-auto">
                    <div className="my-4 leading-relaxed">
                        <Contractors></Contractors>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Modal;