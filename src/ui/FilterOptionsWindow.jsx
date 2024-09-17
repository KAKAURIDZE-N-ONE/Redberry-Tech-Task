import FilterOptionsRegion from "./FilterOptionsRegion";
import FilterRoomsQuantity from "./FilterRoomsQuantity";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import {
  getLastOpenedFilter,
  getMaxArea,
  getMaxPrice,
  getMinArea,
  getMinPrice,
  updateLastOpenedFilter,
  updateMaxArea,
  updateMaxPrice,
  updateMinArea,
  updateMinPrice,
} from "../slices/filtersSlice";
import { filterValues } from "../data";
import FilterOptionsPricesOrArea from "./FilterOptionsPricesOrArea";
import { useState } from "react";
import { useUpdateFiltersInUrl } from "../hooks/useUpdateFiltersInUrl";

function FilterOptionsWindow({ filter }) {
  const [choosedRegions, setChoosedRegions] = useState([]);
  const [choosedBedrooms, setChoosedBedrooms] = useState([]);
  const choosedMinPrice = useSelector(getMinPrice);
  const choosedMaxPrice = useSelector(getMaxPrice);
  const choosedMinArea = useSelector(getMinArea);
  const choosedMaxArea = useSelector(getMaxArea);
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({
    "საფასო კატეგორია": "",
    ფართობი: "",
  });
  const { title, values } = filterValues[filter];

  const lastOpenedFilter = useSelector(getLastOpenedFilter);

  const updateFiltersInUrl = useUpdateFiltersInUrl();

  function handleChooseClick() {
    if (filter === "რეგიონი") {
      updateFiltersInUrl("regions", choosedRegions);
      dispatch(updateLastOpenedFilter(""));
    }
    if (filter === "საფასო კატეგორია") {
      if (!errors["საფასო კატეგორია"]) {
        const minPrice = choosedMinPrice || 0;
        const maxPrice = choosedMaxPrice || "infinite";
        const range = String(minPrice) + "-" + String(maxPrice);
        updateFiltersInUrl("price", [range]);
        dispatch(updateMinPrice(""));
        dispatch(updateMaxPrice(""));
        dispatch(updateLastOpenedFilter(""));
      }
    }
    if (filter === "ფართობი") {
      if (!errors["ფართობი"]) {
        const minArea = choosedMinArea || 0;
        const maxArea = choosedMaxArea || "infinite";
        const range = String(minArea) + "-" + String(maxArea);
        updateFiltersInUrl("area", [range]);
        dispatch(updateMinArea(""));
        dispatch(updateMaxArea(""));
        dispatch(updateLastOpenedFilter(""));
      }
    }
    if (filter === "საძინებლების რაოდენობა") {
      updateFiltersInUrl("bedrooms", choosedBedrooms);
      dispatch(updateLastOpenedFilter(""));
    }
  }

  return (
    <div className="p-[2.4rem] flex flex-col gap-[2.4rem] relative bg-white z-[400]">
      <h2 className="text-[1.6rem] font-medium text-nowrap mr-6">{title}</h2>
      {lastOpenedFilter === "რეგიონი" && (
        <FilterOptionsRegion
          choosedRegions={choosedRegions}
          setChoosedRegions={setChoosedRegions}
        />
      )}
      {lastOpenedFilter === "საფასო კატეგორია" && (
        <FilterOptionsPricesOrArea
          setErrors={setErrors}
          errors={errors}
          filter={filter}
          values={values}
        />
      )}
      {lastOpenedFilter === "ფართობი" && (
        <FilterOptionsPricesOrArea
          setErrors={setErrors}
          errors={errors}
          filter={filter}
          values={values}
        />
      )}
      {lastOpenedFilter === "საძინებლების რაოდენობა" && (
        <FilterRoomsQuantity
          choosedBedrooms={choosedBedrooms}
          setChoosedBedrooms={setChoosedBedrooms}
          values={values}
        />
      )}
      <div className="flex justify-end mt-5">
        <Button clickFn={() => handleChooseClick()} type="filled" size="small">
          არჩევა
        </Button>
      </div>
    </div>
  );
}

export default FilterOptionsWindow;
