"use client";
import React from "react";
import editIcon from "../../images/edit-pencil.png";
import Image from "next/image";
import Button from "../Common/Button";
import CustomModal from "../Common/CustomModal";
import UploadFileButton from "./UploadFileButton";

const Card = (props) => {
  const [showModal, setShowModal] = React.useState<boolean>(false);

  return (
    <>
      <div className="px-2 py-5 lg:m-1 border border-[#E1D9CE] rounded-md bg-[#FFFDFB]">
        <div className="flex items-center justify-between mx-4">
          <div>
            <div className="font-medium text-base pb-2 text-[#292021] ">
              {props.labelText}
            </div>
            <div className="font-sm text-sm text-[#939393]">
              <input
                className="bg-transparent border-none focus:outline-none"
                value={props.inputText}
                onChange={() => {}}
              />
            </div>
          </div>
          <div>
            {props.button === "verify" ? (
              <div
                onClick={() => {
                  setShowModal(true);
                }}
              >
                <Button
                  ButtonText="Verify"
                  ButtonClasses="px-8 py-3 bg-transparent font-medium text-base border border-[#333333] rounded-md"
                />
              </div>
            ) : (
              <Image
                className="ml-2 cursor-pointer text-[#90969C]"
                src={editIcon}
                alt=""
              />
            )}
          </div>
        </div>
      </div>
      <CustomModal
        isBackground={true}
        showModal={showModal}
        setShowModal={setShowModal}
        modalTitle={props.modalTitle}
      >
        <div className="w-3/4 font-normal text-sm text-[#939393]">
          Verify Your Government ID by Uploading Pictures of your ID Card
        </div>
        <UploadFileButton labelText="Upload Front Side" />
        <UploadFileButton labelText="Upload Back Side" />
        <div className="flex items-center justify-center p-6 border-t border-solid rounded-b border-slate-200">
          <button
            className="px-9 py-3.5 mb-1 mr-1 text-base font-medium text-white transition-all duration-150 ease-linear rounded-md shadow outline-none bg-[#333333] active:bg-[#333333] hover:shadow-lg focus:outline-none"
            type="button"
            onClick={() => setShowModal(false)}
          >
            Save
          </button>
        </div>
      </CustomModal>
    </>
  );
};

export default Card;
