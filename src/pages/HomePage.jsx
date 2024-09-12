import Button from "../ui/Button";
import ChoosedFilters from "../ui/ChoosedFilters";
import FiltersBar from "../ui/FiltersBar";
import RealEstatesList from "../ui/RealEstatesList";

const filtersArray = ["თბილისი", "თბილისი", "თბილისი"];

function HomePage() {
  return (
    <div className="wrapper pb-96">
      <div className="mt-[7.7rem] flex items-center justify-between">
        <FiltersBar />
        <div className="flex gap-[1.6rem]">
          <Button type="filled" icon="plus">
            ლისტინგის დამატება
          </Button>
          <Button type="outlinef" icon="plus">
            აგენტის დამატება
          </Button>
        </div>
      </div>
      <ChoosedFilters />
      <RealEstatesList />
    </div>
  );
}

export default HomePage;
