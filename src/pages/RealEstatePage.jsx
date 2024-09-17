import Location from "../../public/svgs/Location.svg";
import Bed from "../../public/svgs/Bed.svg";
import Vector from "../../public/svgs/Vector.svg";
import Vector2 from "../../public/svgs/Vector2.svg";
import Email from "../../public/svgs/Email.svg";
import Phone from "../../public/svgs/Phone.svg";
import { useNavigate, useParams } from "react-router-dom";
import ArrowRight from "../../public/svgs/ArrowRight.svg";
import Button from "../ui/Button";
import EstatesSlider from "../ui/EstatesSlider";
import { useEffect, useState } from "react";
import Modal from "../ui/Modal";
import DeleteListingModalBody from "../ui/DeleteListingModalBody";
import { useQuery } from "@tanstack/react-query";
import { getRealEstate } from "../services/apiRealEstates";
import { formatPrice } from "../utils/formatPrice";
import { formatDateFromTimestamp } from "../utils/formatDate";
import RentOrSellTeg from "../ui/RentOrSellTeg";

function RealEstatePage() {
  const [deleteListingModalIsOpen, setDeleteListingModalIsOpen] =
    useState(false);

  const { id } = useParams();

  const { data, isPending, error } = useQuery({
    queryKey: ["real-estate", id],
    queryFn: () => getRealEstate(id),
  });

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  const type = data?.is_rental ? "ქირავდება" : "იყიდება";

  return (
    <div className="wrapper pb-96">
      {isPending && (
        <Modal turnOfFn={() => {}}>
          <span className="loader"></span>
        </Modal>
      )}
      {deleteListingModalIsOpen && (
        <Modal turnOfFn={() => setDeleteListingModalIsOpen(false)}>
          <DeleteListingModalBody
            realEstateId={id}
            setDeleteListingModalIsOpen={setDeleteListingModalIsOpen}
          />
        </Modal>
      )}
      {/* Back button */}
      <img
        onClick={() => {
          navigate(-1);
        }}
        src={ArrowRight}
        alt="arrow right"
        className="w-[3.2rem] h-[3.2rem] mt-[6rem] cursor-pointer"
      />

      {/* Main content */}
      <div className="flex gap-[6.8rem] mt-10">
        {/* Image */}
        <div
          className="relative"
          style={{ width: "55%", aspectRatio: "1.250" }}
        >
          <RentOrSellTeg type={type} size="big" />
          <div
            style={{
              backgroundImage: `url(${data?.image})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
            className="rounded-t-[1.4rem] w-full h-full"
          ></div>
        </div>

        {/* Property details */}
        <div className="flex-1 flex flex-col justify-between max-w-[50rem] pt-[2.5rem]">
          <div className="flex flex-col gap-[4rem]">
            <div className="flex flex-col gap-[2.4rem]">
              {/* Price */}
              <h1 className="text-[4.8rem] font-bold">
                {data?.price && `${formatPrice(data?.price)} ₾`}
              </h1>

              {/* Property Information */}
              <div className="flex flex-col gap-[1.6rem]">
                <div className="flex items-center gap-[0.4rem]">
                  <img
                    src={Location}
                    alt="location"
                    className="w-[2.2rem] h-[2.2rem] -ml-1"
                  />
                  <p
                    className="text-[2.4rem] font-normal"
                    style={{ color: "#808A93" }}
                  >
                    {data?.city?.name}, {data?.address}
                  </p>
                </div>

                {/* Area */}
                <div className="flex items-center gap-[0.6rem]">
                  <img
                    src={Vector}
                    alt="area"
                    className="w-[1.7rem] h-[1.7rem]"
                  />
                  <p
                    className="text-[2.4rem] font-normal"
                    style={{ color: "#808A93" }}
                  >
                    ფართი {data?.area}
                  </p>
                  <div className="relative">
                    <p
                      style={{ color: "#808A93" }}
                      className="font-normal text-[2.4rem]"
                    >
                      მ
                    </p>
                    <p
                      style={{ color: "#808A93" }}
                      className="absolute top-1 -right-4 text-[1.5rem]"
                    >
                      2
                    </p>
                  </div>
                </div>

                {/* Bedrooms */}
                <div className="flex items-center gap-[0.4rem]">
                  <img
                    src={Bed}
                    alt="bedrooms"
                    className="w-[2.2rem] h-[2.2rem]"
                  />
                  <p
                    className="text-[2.4rem] font-normal"
                    style={{ color: "#808A93" }}
                  >
                    საძინებელი {data?.bedrooms}
                  </p>
                </div>

                {/* Postal Code */}
                <div className="flex items-center gap-[0.4rem]">
                  <img
                    src={Vector2}
                    alt="postal code"
                    className="w-[2.2rem] h-[2.2rem]"
                  />
                  <p
                    className="text-[2.4rem] font-normal"
                    style={{ color: "#808A93" }}
                  >
                    საფოსტო ინდექსი {data?.zip_code}
                  </p>
                </div>
              </div>
            </div>

            {/* Property Description */}
            <div>
              <p
                style={{ color: "#808A93" }}
                className="text-[1.6rem] font-normal leading-[2.6rem]"
              >
                {data?.description}
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[2rem]">
            <div className="border border-custom-borderColor mt-4 p-9 rounded-[0.8rem] flex flex-col gap-[1.3rem]">
              <div className="flex items-center gap-5">
                <div
                  style={{
                    backgroundImage: `url(${data?.agent?.avatar})`,
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                  className="w-[7.2rem] h-[7.2rem] rounded-full"
                ></div>
                <div className="flex flex-col">
                  <p className="text-[1.6rem] font-normal">
                    {data?.agent?.name} {data?.agent?.surname}
                  </p>
                  <p style={{ color: "#676E76" }} className="text-[1.4rem]">
                    აგენტი
                  </p>
                </div>
              </div>
              <div>
                <div className="flex items-center gap-[0.5rem]">
                  <img
                    src={Email}
                    alt="Email"
                    className="w-[1.6rem] h-[1.3rem]"
                  />
                  <p style={{ color: "#808A93" }} className="text-[1.4rem]">
                    {data?.agent?.email}
                  </p>
                </div>
                <div className="flex items-center gap-[0.5rem]">
                  <img
                    src={Phone}
                    alt="Email"
                    className="w-[1.3rem] h-[1.3rem]"
                  />
                  <p style={{ color: "#808A93" }} className="text-[1.4rem]">
                    {data?.agent?.phone}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Button
                clickFn={() => setDeleteListingModalIsOpen(true)}
                fontSize="1.2rem"
                type="erase"
              >
                ლისტინგის წაშლა
              </Button>
            </div>
          </div>
        </div>
      </div>
      <h1
        style={{ color: "#808A93" }}
        className="text-[1.6rem] text-center mt-3"
      >
        გამოქვეყნების თარიღი {formatDateFromTimestamp(data?.created_at)}
      </h1>
      <EstatesSlider
        currentRealEstateId={data?.id}
        regionId={data?.city?.region_id}
      />
    </div>
  );
}

export default RealEstatePage;
