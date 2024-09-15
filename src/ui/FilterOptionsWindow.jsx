import FilterOptionsRegion from "./FilterOptionsRegion";
import FilterOptionsPrices from "./FilterOptionsPrices";
import FilterRoomsQuantity from "./FilterRoomsQuantity";
import Button from "./Button";
import { useSelector } from "react-redux";
import { getLastOpenedFilter } from "../slices/filtersSlice";
import { filterValues } from "../data";

function FilterOptionsWindow({ filter }) {
  const { title, values } = filterValues[filter];

  const lastOpenedFilter = useSelector(getLastOpenedFilter);

  return (
    <div className="p-[2.4rem] flex flex-col gap-[2.4rem] relative bg-white z-10">
      <h2 className="text-[1.6rem] font-medium text-nowrap mr-6">{title}</h2>
      {lastOpenedFilter === "რეგიონი" && (
        <FilterOptionsRegion values={values} />
      )}
      {lastOpenedFilter === "საფასო კატეგორია" && (
        <FilterOptionsPrices filter={filter} values={values} />
      )}
      {lastOpenedFilter === "ფართობი" && (
        <FilterOptionsPrices filter={filter} values={values} />
      )}
      {lastOpenedFilter === "საძინებლების რაოდენობა" && (
        <FilterRoomsQuantity values={values} />
      )}
      <div className="flex justify-end mt-5">
        <Button type="filled" size="small">
          არჩევა
        </Button>
      </div>
    </div>
  );
}

export default FilterOptionsWindow;
