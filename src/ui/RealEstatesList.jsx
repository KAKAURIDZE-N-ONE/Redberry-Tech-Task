import RealEstateListItem from "./RealEstateListItem";
import { data } from "../data";

function RealEstatesList() {
  return (
    <div className="grid grid-cols-4 grid-flow-row gap-[2rem] mt-[3.5rem]">
      {data.map((dataItem, i) => {
        return <RealEstateListItem dataItem={dataItem} key={i} />;
      })}
    </div>
  );
}

export default RealEstatesList;
