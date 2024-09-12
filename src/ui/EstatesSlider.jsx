import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { data } from "../data";
import RealEstateListItem from "./RealEstateListItem";
import SliderRightArrow from "../../public/svgs/SliderRightArrow.svg";
import SliderLeftArrow from "../../public/svgs/SliderLeftArrow.svg";

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

function EstatesSlider() {
  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative mt-[7rem]">
      <h2 className="text-[3.2rem] font-medium">ბინები მსგავს ლოკაციაზე</h2>
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((dataItem, i) => (
            <div key={i} className="px-[1rem]">
              <RealEstateListItem dataItem={dataItem} />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default EstatesSlider;
