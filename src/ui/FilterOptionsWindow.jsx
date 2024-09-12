import { IoCheckmarkSharp } from "react-icons/io5";
import FilterOptionsRegion from "./FilterOptionsRegion";
import FilterOptionsPrices from "./FilterOptionsPrices";
import FilterRoomsQuantity from "./FilterRoomsQuantity";
import Button from "./Button";
const filterValues = {
  რეგიონი: {
    title: "რეგიონის მიხედვით",
    values: [
      "ქართლი",
      "კახეთი",
      "იმერეთი",
      "სამეგრელო",
      "გურია",
      "რაჭა",
      "ლეჩხუმი",
      "სამცხე-ჯავახეთი",
      "აჭარა",
      "სვანეთი",
      "მცხეთა-მთიანეთი",
      "თბილისი",
    ],
  },
  "საფასო კატეგორია": {
    title: "ფასის მიხედვით",
    values: [50000, 100000, 150000, 200000, 300000],
  },
  ფართობი: {
    title: "ფართობის მიხედვით",
    values: [50, 100, 150, 200, 300],
  },
  "საძინებლების რაოდენობა": {
    title: "საძინებლების რაოდენობა",
    values: [1, 2, 3, 4, 5, 6],
  },
};

function FilterOptionsWindow({ filter }) {
  const { title } = filterValues[filter];
  const { values } = filterValues[filter];

  return (
    <div className="p-[2.4rem] flex flex-col gap-[2.4rem] relative bg-white z-10">
      <h2 className="text-[1.6rem] font-medium text-nowrap mr-6">{title}</h2>
      {filter === "რეგიონი" && <FilterOptionsRegion values={values} />}
      {filter === "საფასო კატეგორია" && (
        <FilterOptionsPrices filter={filter} values={values} />
      )}
      {filter === "ფართობი" && (
        <FilterOptionsPrices filter={filter} values={values} />
      )}
      {filter === "საძინებლების რაოდენობა" && (
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
