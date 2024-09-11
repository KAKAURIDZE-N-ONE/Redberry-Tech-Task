import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { useOutsideClick } from "../hooks/useOutsideClick";
import FilterOptionsWindow from "./FilterOptionsWindow";

function FiltersBarItem({ filter }) {
  const [filterValuesIsActive, setFilterValuesIsActive] = useState(false);

  const itemRef = useOutsideClick(() => setFilterValuesIsActive(false));

  const LI_STYLE = {
    backgroundColor: filterValuesIsActive ? "#F3F3F3" : "#fff",
  };

  return (
    <li
      style={LI_STYLE}
      className="py-[0.6rem] px-[1.4rem] flex gap-[0.4rem] items-center justify-center relative 
      cursor-pointer rounded-[0.6rem]"
      key={filter}
      ref={itemRef}
      onClick={() => {
        setFilterValuesIsActive(!filterValuesIsActive);
      }}
    >
      <h3 className="text-[1.6rem] font-medium select-none">{filter}</h3>
      <IoIosArrowDown
        className="transition-all duration-200"
        style={{ transform: filterValuesIsActive ? "rotate(180deg)" : "" }}
        fontSize={14}
      />
      {filterValuesIsActive && (
        <div
          style={{ left: filter === "რეგიონი" ? "-6px" : "0" }}
          onClick={(e) => e.stopPropagation()}
          className="cursor-default absolute top-[53px] h-96 border
          border-custom-borderColor rounded-[1rem]"
        >
          <FilterOptionsWindow filter={filter} />
        </div>
      )}
    </li>
  );
}

export default FiltersBarItem;
