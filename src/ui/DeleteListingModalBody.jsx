import Button from "./Button";
import DeleteX from "../../public/svgs/DeleteX.svg";

function DeleteListingModalBody({ setDeleteListingModalIsOpen }) {
  function turnOffModal() {
    setDeleteListingModalIsOpen(false);
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
          <Button clickFn={() => turnOffModal()}>გაუქმება</Button>
          <Button type="filled">დადასტურება</Button>
        </div>
      </div>
    </div>
  );
}

export default DeleteListingModalBody;
