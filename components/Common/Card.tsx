"use client";
import React from "react";
import Image from "next/image";
import Button from "../Common/Button";
import CustomModal from "../Common/CustomModal";
import UploadFileButton from "./UploadFileButton";

const Card = (props) => {
  const [showModal, setShowModal] = React.useState<boolean>(false);
  const [isEdit, setIsEdit] = React.useState<boolean>(false);

  const handleCancel = () => {
    setIsEdit(false);
  };
  return (
    <>
      <div
        className={`${
          props.iconPosition === "left" ? "bg-[#FAFAFA]" : "bg-[#FFFDFB]"
        } px-2 py-5 lg:m-1 border border-[#E1D9CE] rounded-md`}
      >
        {isEdit ? (
          <div className="flex flex-col justify-between mx-4 mr-10">
            <div className="font-medium text-base pb-2 text-[#292021] ">
              {props.label1Text}
            </div>
            {props.editCode}
            <div className="flex justify-center gap-4 py-4 text-base font-medium">
              <Button
                ButtonClicked={handleCancel}
                ButtonText="Cancel"
                ButtonClasses="px-8 py-3 bg-transparent border border-[#939393] rounded-md"
              />

              <Button
                ButtonText="Save"
                ButtonClasses="px-8 py-3 bg-[#333333] text-white border border-[#333333] rounded-md"
              />
            </div>
          </div>
        ) : (
          <div
            className={`flex ${
              props.iconPosition === "left"
                ? "flex-row-reverse items-start justify-end gap-2 mx-2"
                : "items-center justify-between mx-4"
            } `}
          >
            <div>
              <div className="font-medium text-base pb-2 text-[#292021] ">
                {props.label1Text}
              </div>
              <div className="font-sm text-sm text-[#939393]">
                {props.label2Text}
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
                  onClick={() => {
                    setIsEdit(true);
                  }}
                  className="cursor-pointer text-[#90969C]"
                  src={props.icon}
                  alt=""
                />
              )}
            </div>
          </div>
        )}
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
