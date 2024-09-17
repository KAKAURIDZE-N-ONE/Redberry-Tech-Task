import { IoIosArrowDown } from "react-icons/io";
import { useOutsideClick } from "../hooks/useOutsideClick";
import FilterOptionsWindow from "./FilterOptionsWindow";
import { useDispatch, useSelector } from "react-redux";
import {
  getLastOpenedFilter,
  updateLastOpenedFilter,
} from "../slices/filtersSlice";

function FiltersBarItem({ filter }) {
  const lastOpenedFilter = useSelector(getLastOpenedFilter);
  const dispatch = useDispatch();

  const itemRef = useOutsideClick(() => {
    if (lastOpenedFilter === filter) {
      dispatch(updateLastOpenedFilter(""));
    }
  });

  const LI_STYLE = {
    backgroundColor: lastOpenedFilter === filter ? "#F3F3F3" : "#fff",
  };

  function handleFilterBarItemClick(e) {
    e.stopPropagation();
    if (lastOpenedFilter === filter) {
      dispatch(updateLastOpenedFilter(""));
    } else {
      dispatch(updateLastOpenedFilter(filter));
    }
  }

  return (
    <li
      style={LI_STYLE}
      ref={itemRef} // Apply ref here
      className="py-[0.6rem] px-[1.4rem] flex gap-[0.4rem] items-center justify-center relative 
      cursor-pointer rounded-[0.6rem]"
      onClick={handleFilterBarItemClick}
    >
      <h3 className="text-[1.6rem] font-medium select-none">{filter}</h3>
      <IoIosArrowDown
        className="transition-all duration-200"
        style={{
          transform: lastOpenedFilter === filter ? "rotate(180deg)" : "",
        }}
        fontSize={14}
      />
      {lastOpenedFilter === filter && (
        <div
          style={{ left: filter === "რეგიონი" ? "-6px" : "0" }}
          onClick={(e) => e.stopPropagation()}
          className="cursor-default absolute top-[53px] border
          border-custom-borderColor rounded-[1rem] overflow-hidden z-[1000]"
        >
          <FilterOptionsWindow filter={filter} />
        </div>
      )}
    </li>
  );
}

export default FiltersBarItem;
