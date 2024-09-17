import Location from "../../public/svgs/Location.svg";
import Bed from "../../public/svgs/Bed.svg";
import Vector from "../../public/svgs/Vector.svg";
import Vector2 from "../../public/svgs/Vector2.svg";
import { useNavigate } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";
import RentOrSellTeg from "./RentOrSellTeg";
import { useState } from "react";

function RealEstateListItem({ dataItem, isInSlider }) {
  const {
    is_rental,
    image,
    city,
    price,
    address,
    bedrooms,
    area,
    zip_code,
    id,
  } = dataItem;
  const [isDragging, setIsDragging] = useState(false);

  const navigate = useNavigate();
  function handleRealEstateClick() {
    if (isDragging) return;
    navigate(`/listing/${id}`);
    if (isInSlider) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  const handleMouseDown = () => setIsDragging(false);
  const handleMouseMove = () => setIsDragging(true);
  const handleMouseUp = () => {
    setTimeout(() => {
      setIsDragging(false);
    }, 10);
  };
  const type = is_rental ? "ქირავდება" : "იყიდება";

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onClick={handleRealEstateClick}
      className="rounded-[1.4rem] cursor-pointer 
      no-select hover:shadow-custom-light shadow-none transition-all duration-200"
      draggable={false}
    >
      <div className="relative">
        <RentOrSellTeg type={type} />
        <div
          className="rounded-t-[1.4rem] select-none"
          style={{
            width: "100%",
            aspectRatio: "1.250",
            backgroundImage: `url(${image})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      </div>
      <div
        className="w-full border-l border-r border-b border-custom-borderColor rounded-b-[1.4rem]
             py-[2.2rem] px-[2.5rem] flex flex-col gap-[2rem]"
      >
        <div>
          <div className="flex flex-col gap-[0.6rem]">
            <p className="font-bold text-[2.8rem]">{formatPrice(price)} ₾</p>
            <div className="flex items-center gap-[0.4rem]">
              <img
                src={Location}
                alt="location"
                className="w-[2rem] h-[2rem]"
              />
              <p
                className="text-[1.6rem] font-normal"
                style={{ text: "#021526B2" }}
              >
                {city?.name} {address}
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[3.2rem]">
          <div className="flex items-center gap-[0.5rem]">
            <img src={Bed} alt="bed" className="w-[2.4rem] h-[2.4rem]" />
            <p
              style={{ color: "#021526B2" }}
              className="text-[1.6rem] font-normal"
            >
              {bedrooms}
            </p>
          </div>
          <div className="flex items-center gap-[0.5rem]">
            <img src={Vector} alt="vector" className="w-[1.8rem] h-[1.8rem]" />
            <p
              style={{ color: "#021526B2" }}
              className="text-[1.6rem] font-normal"
            >
              {area}
            </p>
            <div className="relative">
              <p
                style={{ color: "#021526B2" }}
                className="font-normal text-[1.6rem]"
              >
                მ
              </p>
              <p
                style={{ text: "#021526B2", opacity: 0.7 }}
                className="absolute top-0 -right-3 text-[1.1rem]"
              >
                2
              </p>
            </div>
          </div>
          <div className="flex items-center gap-[0.5rem]">
            <img src={Vector2} alt="vector" className="w-[1.6rem] h-[1.8rem]" />
            <p
              style={{ color: "#021526B2" }}
              className="text-[1.6rem] font-normal"
            >
              {zip_code}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RealEstateListItem;
