import Location from "../../public/svgs/Location.svg";
import Bed from "../../public/svgs/Bed.svg";
import Vector from "../../public/svgs/Vector.svg";
import Vector2 from "../../public/svgs/Vector2.svg";
import { Link } from "react-router-dom";
import { formatPrice } from "../utils/formatPrice";

function RealEstateListItem({ dataItem }) {
  return (
    <Link
      to={`/listing/2`}
      className="rounded-[1.4rem] cursor-pointer 
      no-select hover:shadow-custom-light shadow-none transition-all duration-200"
      draggable={false}
    >
      <div className="relative">
        <div
          className="absolute flex items-center justify-center top-[2rem] py-[0.6rem] px-[1.2rem] left-[2rem]
                rounded-full"
          style={{ backgroundColor: "#02152680" }}
        >
          <div className="relative">
            <div className="opacity-50">
              <h4 className="font-medium text-white text-[1.2rem] tracking-wide opacity-0">
                {dataItem?.type}
              </h4>
            </div>
            <h4
              className=" top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  absolute font-medium text-white text-[1.2rem] tracking-wide opacity-1"
            >
              {dataItem.type}
            </h4>
          </div>
        </div>
        <div
          className="rounded-t-[1.4rem] select-none"
          style={{
            width: "100%",
            aspectRatio: "1.250",
            backgroundImage: `url(${dataItem.img})`,
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
            <p className="font-bold text-[2.8rem]">
              {formatPrice(dataItem.price)} ₾
            </p>
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
                {dataItem.address}
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
              {dataItem.roomsQuantity}
            </p>
          </div>
          <div className="flex items-center gap-[0.5rem]">
            <img src={Vector} alt="vector" className="w-[1.8rem] h-[1.8rem]" />
            <p
              style={{ color: "#021526B2" }}
              className="text-[1.6rem] font-normal"
            >
              {dataItem.space}
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
              {dataItem.zipAddress}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default RealEstateListItem;
