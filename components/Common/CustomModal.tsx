import React, { useMemo, useState } from "react";
import closeIcon from "../../images/crossIcon.png";
import Image from "next/image";

const CustomModal = ({
  isBackground,
  modalTitle,
  children,
  isFooter,
  setShowModal,
  showModal,
}: any) => {
  const modalBg = useMemo(() => {
    if (isBackground) {
      return "border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none";
    } else {
      return "border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-trasperent outline-none focus:outline-none";
    }
  }, [isBackground]);
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className={modalBg}>
                <div className="flex items-start justify-between p-5 ">
                  {modalTitle ? (
                    <h3 className="text-3xl font-semibold">{modalTitle}</h3>
                  ) : null}
                  <button
                    className="p-1 ml-auto border-0 text-white float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className=" text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {/*body*/}
                {children ? children : null}
                {/*footer*/}
                {isFooter ? (
                  <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Save Changes
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default CustomModal;
