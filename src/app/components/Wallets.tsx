import React from "react";
import BoxWrapper from "./Wrappers/BoxWrapper";
import data from "../data/dummyJson.json";
import ListContainer from "./Shared/ListContainer";
import ProgressBar from "./Shared/ProgressBar";
import SelectBox from "./Shared/SelectBox";
import Logo from "../../images/icon.svg";
import UIIcon from "../../images/respIcon.svg"

const selectOptions = [
  { label: "Option 1", value: "1" },
  { label: "Option 2", value: "2" },
  { label: "Option 3", value: "3" },
  { label: "Option 4", value: "4" },
  { label: "Option 5", value: "5" },
  { label: "Option 6", value: "6" },
];

const Wallets = () => {
  let walletValue: string = "$7,607,841";
  return (
    <section className="w-full flex justify-center ">
      <BoxWrapper title="Recent Active Wallets">
        <ListContainer items={data} />
      </BoxWrapper>
      <div className="h-full flex flex-col justify-end min-h-[650px]">
        <UIIcon />
      </div>
      <BoxWrapper title="">
        <div className="w-full h-full flex flex-col gap-4">
          <div className="w-full rounded-2xl bg-[#eaeaea] p-[30px]">
            <div className="flex text-black justify-between items-center pb-4 font-bold">
              <p>Person is Live</p>
              <p>
                <span className="text-[#008000] text-xs">Raised: </span>
                {walletValue}
              </p>
            </div>
            <ProgressBar completed="70" />
            <h1 className="font-semibold text-3xl text-black mt-5 text-center">
              1 BTC = $0.00433
            </h1>
          </div>
          <div className="w-full rounded-2xl bg-[#eaeaea] px-[30px] py-[15px] flex justify-center items-center gap-9 font-bold">
            <div className="flex gap-[43px]">
              <p className="text-[#556FF5]">Listing Price</p>
              <p className="text-[#000]">$0.01 (130.95%)</p>
            </div>
            <div className="flex gap-[43px]">
              <p className="text-[#556FF5]">Next Price</p>
              <p className="text-[#000]">$0.00498 (+5.01%)</p>
            </div>
          </div>
          <div className="flex gap-4 justify-center items-center">
            <div className="flex flex-col">
              <p className="text-[#556ff5] font-bold text-[16px] pb-3">
                Select a Payment Method
              </p>
              <SelectBox options={selectOptions} />
            </div>
            <div className="w-full flex flex-col">
              <p className="text-[#556ff5] font-bold text-[16px] pb-3">
                USD cost
              </p>
              <div className="w-full flex items-center justify-between font-bold appearance-none bg-[#EAEAEA] text-black rounded-[48px] py-5 ps-[30px] pr-10 ">
                <span>Rs.</span>
                <span>0</span>
              </div>
            </div>
          </div>
          <div className="w-full">
            <div className="flex justify-between items-center">
              <p className="text-[#556ff5] font-bold text-[16px] pb-3">
                Balance
              </p>
              <p className="text-[#556ff5] font-bold text-[16px] pb-3">0 BTC</p>
            </div>
            <div className="w-full flex items-center justify-between font-bold appearance-none bg-[#EAEAEA] text-black rounded-[48px] py-5 ps-[30px] pr-10 ">
              <Logo color="#000" />
              <span>0</span>
            </div>
          </div>
          <div className="mt-[5px]">
            <ProgressBar completed="0" />
          </div>
        </div>
      </BoxWrapper>
    </section>
  );
};

export default Wallets;
