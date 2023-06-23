import React, { useMemo, useState } from "react";
import closeIcon from "../../images/close-icon.png";
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
      return "border-0 rounded-lg relative flex flex-col w-full bg-white outline-none focus:outline-none";
    } else {
      return "border-0 rounded-lg relative flex flex-col w-full bg-trasperent outline-none focus:outline-none";
    }
  }, [isBackground]);
  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black-gradiant backdrop-blur-sm">
            <div className="relative w-auto mx-auto max-w-[1440px] px-12 max-lg:px-5 h-full">
              <div className={modalBg}>
                <div className="flex items-start justify-between py-9 ">
                  {modalTitle ? (
                    <h3 className="text-base font-medium">{modalTitle}</h3>
                  ) : null}
                  <button
                    className="float-right p-1 ml-auto text-3xl font-semibold leading-none text-white border-0 outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className=" text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <Image src={closeIcon} alt="" />
                    </span>
                  </button>
                </div>
                {/*body*/}
                {children ? children : null}
                {/*footer*/}
                {isFooter ? (
                  <div className="flex items-center justify-end p-6 border-t border-solid rounded-b border-slate-200">
                    <button
                      className="px-6 py-2 mb-1 mr-1 text-sm font-bold text-red-500 uppercase transition-all duration-150 ease-linear outline-none background-transparent focus:outline-none"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Close
                    </button>
                    <button
                      className="px-6 py-3 mb-1 mr-1 text-sm font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-lg focus:outline-none"
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
          <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
        </>
      ) : null}
    </>
  );
};

export default CustomModal;
