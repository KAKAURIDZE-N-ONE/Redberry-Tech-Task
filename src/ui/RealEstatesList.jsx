import { useQuery } from "@tanstack/react-query";
import RealEstateListItem from "./RealEstateListItem";
import { getRealEstates } from "../services/apiRealEstates";
import { useGetActiveFilterValues } from "../hooks/useGetActiveFilterValues";
import Modal from "./Modal";

function RealEstatesList() {
  const { data, isPending } = useQuery({
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
      maxPrice !== "infinite"
        ? price >= Number(minPrice) && price <= Number(maxPrice)
        : price >= Number(minPrice);

    const areaIsMatching =
      maxArea !== "infinite"
        ? area >= Number(minArea) && area <= Number(maxArea)
        : area >= Number(minArea);

    if (
      regionsFilter.includes(regionName) ||
      bedrooms.includes(String(dataBedrooms)) ||
      priceIsMatching ||
      areaIsMatching
    )
      return true;

    return false;
  }

  const matchingData = data?.filter((dataItem) => matches(dataItem));

  if (matchingData?.length === 0)
    return (
      <h2 className="text-[#021526CC] text-[2rem] mt-[5rem]">
        აღნიშნული მონაცემებით განცხადება არ იძებნება
      </h2>
    );
  else
    return (
      <div className="grid grid-cols-4 grid-flow-row gap-[2rem] mt-[2.5rem]">
        {isPending && (
          <Modal turnOfFn={() => {}}>
            <span className="loader"></span>
          </Modal>
        )}
        {matchingData?.map((dataItem, i) => {
          return <RealEstateListItem dataItem={dataItem} key={i} />;
        })}
      </div>
    );
}

export default RealEstatesList;
