import Button from "../ui/Button";
import FiltersBar from "../ui/FiltersBar";

const filtersArray = ["თბილისი", "თბილისი", "თბილისი"];

function HomePage() {
  return (
    <div className="wrapper">
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
      <div></div>
    </div>
  );
}

export default HomePage;
