import { useQuery } from "@tanstack/react-query";
import RealEstateListItem from "./RealEstateListItem";
import { getRealEstates } from "../services/apiRealEstates";
import { useGetActiveFilterValues } from "../hooks/useGetActiveFilterValues";

function RealEstatesList() {
  const { data, isPending, error } = useQuery({
    queryKey: ["real-estates"],
    queryFn: getRealEstates,
  });

  const regionsFilter = useGetActiveFilterValues("regions");
  const [minPrice, maxPrice] =
    useGetActiveFilterValues("price")?.at(0)?.split("-") || [];
  const [minArea, maxArea] =
    useGetActiveFilterValues("area")?.at(0)?.split("-") || [];
  const bedrooms = useGetActiveFilterValues("bedrooms");

  function matches(dataItem) {
    const regionName = dataItem.city.region.name;
    const { price, area, bedrooms: dataBedrooms } = dataItem;

    if (
      bedrooms.length === 0 &&
      regionsFilter.length === 0 &&
      !minPrice &&
      !maxPrice &&
      !minArea &&
      !maxArea
    )
      return true;

    const priceIsMatching =
      price >= Number(minPrice) && price <= Number(maxPrice);
    const areaIsMatching = area >= Number(minArea) && area <= Number(maxArea);

    if (
      regionsFilter.includes(regionName) ||
      bedrooms.includes(String(dataBedrooms)) ||
      priceIsMatching ||
      areaIsMatching
    )
      return true;

    return false;
  }

  return (
    <div className="grid grid-cols-4 grid-flow-row gap-[2rem] mt-[2.5rem]">
      {data?.map((dataItem, i) => {
        const isMatching = matches(dataItem);
        if (isMatching)
          return <RealEstateListItem dataItem={dataItem} key={i} />;
      })}
    </div>
  );
}

export default RealEstatesList;
