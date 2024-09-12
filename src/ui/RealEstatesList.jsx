import Location from "../../public/svgs/Location.svg";
import Bed from "../../public/svgs/Bed.svg";
import Vector from "../../public/svgs/Vector.svg";
import Vector2 from "../../public/svgs/Vector2.svg";
import { Link } from "react-router-dom";

function RealEstatesList() {
  return (
    <div className="grid grid-cols-4 grid-flow-row gap-[2rem] mt-[3.5rem]">
      {Array.from({ length: 10 }, (el, i) => {
        return (
          <Link
            to={`/estate/2`}
            key={i}
            className="w-full rounded-[1.4rem] cursor-pointer"
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
                      ქირავდება
                    </h4>
                  </div>
                  <h4
                    className=" top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  absolute font-medium text-white text-[1.2rem] tracking-wide opacity-1"
                  >
                    ქირავდება
                  </h4>
                </div>
              </div>
              <div
                className="rounded-t-[1.4rem]"
                style={{
                  width: "100%",
                  aspectRatio: "1.250",
                  backgroundImage:
                    "url(https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
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
                  <p className="font-bold text-[2.8rem]">80 000 ₾</p>
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
                      თბილისი, ი. ჭავჭავაძის 54
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
                    2
                  </p>
                </div>
                <div className="flex items-center gap-[0.5rem]">
                  <img
                    src={Vector}
                    alt="vector"
                    className="w-[1.8rem] h-[1.8rem]"
                  />
                  <p
                    style={{ color: "#021526B2" }}
                    className="text-[1.6rem] font-normal"
                  >
                    55
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
                  <img
                    src={Vector2}
                    alt="vector"
                    className="w-[1.6rem] h-[1.8rem]"
                  />
                  <p
                    style={{ color: "#021526B2" }}
                    className="text-[1.6rem] font-normal"
                  >
                    0160
                  </p>
                </div>
              </div>
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default RealEstatesList;
