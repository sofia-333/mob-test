import React from "react";
import Modal from "./Modal";


const ModalButton = () => {
  const [showModal, setShowModal] = React.useState(false);

  return <div className="flex justify-center m-auto mt-10">
    <button onClick={() => setShowModal(true)} className="bg-gray-300 p-2 rounded-sm">Open Modal</button>
    {showModal ?
        <Modal setShowModal={setShowModal}></Modal>
        :
        <></>
    }
  </div>


};

export default ModalButton;
