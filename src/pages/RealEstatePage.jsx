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

function RealEstatePage() {
  const [deleteListingModalIsOpen, setDeleteListingModalIsOpen] =
    useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, []);

  return (
    <div className="wrapper pb-96">
      {deleteListingModalIsOpen && (
        <Modal turnOfFn={() => setDeleteListingModalIsOpen(false)}>
          <DeleteListingModalBody
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
        <div style={{ width: "55%", aspectRatio: "1.250" }}>
          <div
            style={{
              backgroundImage:
                "url(https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
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
              <h1 className="text-[4.8rem] font-bold">80, 458 ₾</h1>

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
                    თბილისი, ი. ჭავჭავაძის 54
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
                    ფართი 55
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
                    საძინებელი 2
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
                    საფოსტო ინდექსი 2525
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
                იყიდება ბინა ჭავჭავაძის ქუჩაზე, ვაკეში. ბინა არის ახალი
                რემონტით, ორი საძინებლითა და დიდი აივნებით. მოწყობილია ავეჯითა
                და ტექნიკით.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-[2rem]">
            <div className="border border-custom-borderColor mt-4 p-9 rounded-[0.8rem] flex flex-col gap-[1.3rem]">
              <div className="flex items-center gap-5">
                <div
                  style={{
                    backgroundImage:
                      "url(https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg)",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                    backgroundSize: "cover",
                  }}
                  className="w-[7.2rem] h-[7.2rem] rounded-full"
                ></div>
                <div className="flex flex-col">
                  <p className="text-[1.6rem] font-normal">სოფიო გელოვანი</p>
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
                    sophio.gelovani@redberry.ge
                  </p>
                </div>
                <div className="flex items-center gap-[0.5rem]">
                  <img
                    src={Phone}
                    alt="Email"
                    className="w-[1.3rem] h-[1.3rem]"
                  />
                  <p style={{ color: "#808A93" }} className="text-[1.4rem]">
                    557 600 911
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
        გამოქვეყნების თარიღი 08/08/24
      </h1>
      <EstatesSlider />
    </div>
  );
}

export default RealEstatePage;
