import { useNavigate } from "react-router-dom";
import { resetAgentInfo, updateAgentModalIsOpen } from "../slices/agentSlice";
import Button from "../ui/Button";
import ChoosedFilters from "../ui/ChoosedFilters";
import FiltersBar from "../ui/FiltersBar";
import RealEstatesList from "../ui/RealEstatesList";
import { useDispatch } from "react-redux";
import { resetListingInfo } from "../slices/listingSlice";

function HomePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="wrapper pb-96">
      <div className="mt-[7.7rem] flex items-center justify-between">
        <FiltersBar />
        <div className="flex gap-[1.6rem]">
          <Button
            clickFn={() => {
              dispatch(resetListingInfo());
              navigate("/add-listing");
            }}
            type="filled"
            icon="plus"
          >
            ლისტინგის დამატება
          </Button>
          <Button
            clickFn={() => {
              dispatch(updateAgentModalIsOpen(true));
              dispatch(resetAgentInfo());
            }}
            type="outline"
            icon="plus"
          >
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
