import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RealEstateListItem from "./RealEstateListItem";
import SliderRightArrow from "../../public/svgs/SliderRightArrow.svg";
import SliderLeftArrow from "../../public/svgs/SliderLeftArrow.svg";
import { useQuery } from "@tanstack/react-query";
import { getRealEstates } from "../services/apiRealEstates";
import filterSliderData from "../utils/filterSliderData";

const NextArrow = ({ onClick }) => (
  <div
    className="next-arrow absolute top-1/2 right-[-5rem] transform -translate-y-1/2 z-10 cursor-pointer"
    onClick={onClick}
  >
    <img src={SliderLeftArrow} className="w-[3rem] h-[3rem]" />
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="prev-arrow absolute top-1/2 left-[-5rem] transform -translate-y-1/2 z-10 cursor-pointer"
    onClick={onClick}
  >
    <img src={SliderRightArrow} className="w-[3rem] h-[3rem]" />
  </div>
);

function EstatesSlider({ regionId, currentRealEstateId }) {
  const { data, isPending, error } = useQuery({
    queryKey: ["real-estates"],
    queryFn: getRealEstates,
  });

  const filteredData = filterSliderData(data, regionId, currentRealEstateId);
  const sliderNeedFakeData = filteredData?.length < 4;

  var settings = {
    infinite: !sliderNeedFakeData,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  if (filteredData?.length === 0)
    return (
      <div className="relative mt-[7rem]">
        <h2 className="text-[3.2rem] font-medium">
          ბინები მსგავს ლოკაციაზე არ მოიძებნა
        </h2>
      </div>
    );
  else
    return (
      <div className="relative mt-[7rem]">
        <h2 className="text-[3.2rem] font-medium">ბინები მსგავს ლოკაციაზე</h2>
        <div className="mt-20">
          <Slider {...settings}>
            {filteredData?.map((dataItem) => (
              <div key={dataItem.id + dataItem.address} className="px-[1rem]">
                <RealEstateListItem isInSlider={true} dataItem={dataItem} />
              </div>
            ))}
            {sliderNeedFakeData &&
              Array.from({ length: 4 - filteredData.length }, (el, i) => {
                return <div key={i}></div>;
              })}
          </Slider>
        </div>
      </div>
    );
}

export default EstatesSlider;
