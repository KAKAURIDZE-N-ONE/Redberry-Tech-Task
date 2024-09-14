import { useState } from "react";
import ArrowDownIcon from "../../public/svgs/ArrowDown.svg";
import PlusCircle from "../../public/svgs/PlusCircle.svg";
import { useOutsideClick } from "../hooks/useOutsideClick";
import { useDispatch } from "react-redux";
import { updateAgentModalIsOpen } from "../slices/agentSlice";

function CustomSelectInput({
  name,
  label,
  options,
  setSelectedOption,
  selectedOption,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const selectRef = useOutsideClick(() => setIsOpen(false));

  const handleSelectOption = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  console.log(selectedOption);

  return (
    <div className="flex flex-col gap-[0.4rem] relative">
      <div className="flex flex-col gap-[0.5rem]">
        <label
          style={{ color: "#021526" }}
          className="text-[1.4rem] font-medium"
          htmlFor={name}
        >
          {label}
        </label>
        <div ref={selectRef} className="w-[38.4rem]">
          <div
            className={`relative w-[38.4rem] h-[4.2rem] border border-[#808A93] ${
              isOpen ? "rounded-t-[0.6rem]" : "rounded-[0.6rem]"
            }  flex items-center px-4 cursor-pointer`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-[1.6rem]">
              {name === "agent" &&
              selectedOption?.name &&
              selectedOption?.surname
                ? selectedOption?.name + " " + selectedOption?.surname ||
                  "აირჩიე"
                : selectedOption?.name || "აირჩიე"}
            </span>
            <img
              src={ArrowDownIcon}
              alt="arrow-down"
              className="absolute right-[1.5rem] top-[50%] transform -translate-y-1/2 w-[1.4rem] h-[1.4rem]"
            />
          </div>

          {isOpen && (
            <ul
              style={{ top: "calc(100% - 1px)" }}
              className="absolute w-[38.4rem] border border-[#808A93] rounded-b-[0.6rem] bg-white z-10"
              onClick={(e) => e.preventDefault()}
            >
              {name === "agent" && (
                <li
                  key={"agent"}
                  className="px-4 py-3 text-[1.6rem] cursor-pointer hover:bg-gray-100 border-b last:border-none
                 border-[#808A93] flex  items-center gap-[0.8rem]"
                  onClick={() => {
                    dispatch(updateAgentModalIsOpen(true));
                    setIsOpen(false);
                  }}
                >
                  <img
                    src={PlusCircle}
                    alt="Plus circle"
                    className="w-[2.4rem] h-[2.4rem]"
                  />
                  <p>დაამატე აგენტი</p>
                </li>
              )}
              {options.map((option) => (
                <li
                  key={option.id}
                  className="px-4 py-3 text-[1.6rem] cursor-pointer hover:bg-gray-100 border-b last:border-none
                 border-[#808A93]"
                  onClick={() => handleSelectOption(option)}
                >
                  {name === "agent"
                    ? option.name + " " + option.surname
                    : option.name}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
      {/* {errors[name] && (
        <div className="flex gap-[0.7rem] items-center">
          <img src={Mark} alt="mark" className="w-[1rem] h-[0.8rem]" />
          <p className="text-[1.4rem]" style={{ color: "#021526" }}>
            {errors[name].message}
          </p>
        </div>
      )} */}
    </div>
  );
}

export default CustomSelectInput;
