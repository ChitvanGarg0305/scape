import React from "react";
import { FaChevronDown } from "react-icons/fa";

interface Option {
  label: string;
  value: string;
}

interface OptionsProps {
  options: Option[];
}

const SelectBox: React.FC<OptionsProps> = ({ options }) => {
  return (
    <div className="relative inline-block w-64">
      <select className="block font-bold appearance-none w-full bg-[#EAEAEA] text-black rounded-[48px] py-5 ps-[30px] pr-10 focus:outline-none focus:ring focus:ring-blue-500 focus:border-blue-500" defaultValue={"UPI"}>
        <option value="" disabled selected>
          UPI
        </option>
        {options &&
          options.length > 0 &&
          options.map((option: Option) => (
            <option value={option?.value} key={option?.value}>
              {option?.label}
            </option>
          ))}
      </select>
      <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none pe-[30px]">
        <FaChevronDown color="#000" size={24} />
      </div>
    </div>
  );
};

export default SelectBox;
