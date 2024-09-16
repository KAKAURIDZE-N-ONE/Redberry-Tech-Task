import Button from "./Button";
import DeleteX from "../../public/svgs/DeleteX.svg";
import { deleteRealEstate } from "../services/apiRealEstates";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

function DeleteListingModalBody({ setDeleteListingModalIsOpen, realEstateId }) {
  const queryClient = useQueryClient();
  const navigate = useNavigate();

  function turnOffModal() {
    setDeleteListingModalIsOpen(false);
  }

  async function handleDeleteClick() {
    if (!realEstateId) return;
    await deleteRealEstate(realEstateId);
    queryClient.invalidateQueries("real-estates");
    navigate("/");
  }

  return (
    <div
      style={{ zIndex: "2000" }}
      className="bg-white opacity-100 relative rounded-[2rem] py-[6rem] px-[18rem]"
    >
      <img
        src={DeleteX}
        alt="X button"
        className="w-[4.7rem] h-[4.7rem] absolute top-2 right-4 cursor-pointer"
        onClick={turnOffModal}
      />
      <div className="flex flex-col gap-[3.5rem] items-center">
        <h2 className="text-[2rem] font-normal">გსურთ წაშალოთ ლისტინგი?</h2>
        <div className="flex items-center gap-[1.5rem]">
          <Button type="outline" clickFn={() => turnOffModal()}>
            გაუქმება
          </Button>
          <Button clickFn={() => handleDeleteClick()} type="filled">
            დადასტურება
          </Button>
        </div>
      </div>
    </div>
  );
}

export default DeleteListingModalBody;
