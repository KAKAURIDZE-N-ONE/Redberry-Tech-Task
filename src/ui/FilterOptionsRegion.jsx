import { IoCheckmarkSharp } from "react-icons/io5";

function FilterOptionsRegion({ values }) {
  return (
    <ul className="grid grid-rows-4 grid-flow-col gap-x-[5rem] gap-y-[1.5rem] mr-[6rem]">
      {values.map((value) => {
        return (
          <li key={value} className="flex items-center gap-[0.8rem]">
            <div
              className="w-[2rem] h-[2rem] flex items-center justify-center border
                border-custom-borderColor rounded-[0.2rem]"
              style={{
                backgroundColor: "#45A849",
                border: "1px solid #45A849",
              }}
            >
              <IoCheckmarkSharp fontSize={18} color="white" />
            </div>
            <p className="text-nowrap text-[1.4rem] ">{value}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default FilterOptionsRegion;
