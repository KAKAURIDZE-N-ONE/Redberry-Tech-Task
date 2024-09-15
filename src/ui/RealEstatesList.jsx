import { useQuery } from "@tanstack/react-query";
import RealEstateListItem from "./RealEstateListItem";
import { getRealEstates } from "../services/apiRealEstates";

function RealEstatesList() {
  const { data, isPending, error } = useQuery({
    queryKey: ["real-estates"],
    queryFn: getRealEstates,
  });

  return (
    <div className="grid grid-cols-4 grid-flow-row gap-[2rem] mt-[3.5rem]">
      {data?.map((dataItem, i) => {
        return <RealEstateListItem dataItem={dataItem} key={i} />;
      })}
    </div>
  );
}

export default RealEstatesList;
