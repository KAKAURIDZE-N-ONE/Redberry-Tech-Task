import { IoIosArrowDown } from "react-icons/io";

const filters = [
  "რეგიონი",
  "საფასო კატეგორია",
  "ფართობი",
  "საძინებლების რაოდენობა",
];

function FiltersBar() {
  return (
    <div className="border border-custom-borderColor mt-[7.7rem] inline-block rounded-[1rem] p-[0.6rem]">
      <ul className="flex gap-[2.4rem] ">
        {filters.map((filter) => {
          return (
            <li
              className="py-[0.8rem] px-[1.4rem] flex gap-[0.4rem] items-center justify-center"
              key={filter}
            >
              <h3 className="text-[1.6rem] font-medium">{filter}</h3>
              <IoIosArrowDown fontSize={14} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default FiltersBar;
