import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getMaxArea,
  getMaxPrice,
  getMinArea,
  getMinPrice,
  updateMaxArea,
  updateMaxPrice,
  updateMinArea,
  updateMinPrice,
} from "../slices/filtersSlice";

function FilterOptionsPricesOrArea({ values, filter, errors, setErrors }) {
  const minPrice = useSelector(getMinPrice);
  const maxPrice = useSelector(getMaxPrice);
  const minArea = useSelector(getMinArea);
  const maxArea = useSelector(getMaxArea);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!minArea || !maxArea) {
      setErrors({ ...errors, ფართობი: "" });
      return;
    }
    if (minArea > maxArea) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        ფართობი: "ჩაწერეთ ვალიდური მონაცემები",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, ფართობი: "" }));
    }
  }, [minArea, maxArea]);

  useEffect(() => {
    if (!minPrice || !maxPrice) {
      setErrors({ ...errors, "საფასო კატეგორია": "" });
      return;
    }
    if (minPrice > maxPrice) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        "საფასო კატეგორია": "ჩაწერეთ ვალიდური მონაცემები",
      }));
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, "საფასო კატეგორია": "" }));
    }
  }, [minPrice, maxPrice]);

  const error = errors[filter];

  const minValue = filter === "საფასო კატეგორია" ? minPrice : minArea;
  const maxValue = filter === "საფასო კატეგორია" ? maxPrice : maxArea;

  function handleMinValueChange(e) {
    if (filter === "საფასო კატეგორია") dispatch(updateMinPrice(e.target.value));
    if (filter === "ფართობი") dispatch(updateMinArea(e.target.value));
  }

  function handleMaxValueChange(e) {
    if (filter === "საფასო კატეგორია") dispatch(updateMaxPrice(e.target.value));
    if (filter === "ფართობი") dispatch(updateMaxArea(e.target.value));
  }

  const value =
    filter === "საფასო კატეგორია" ? (
      <h1 className="absolute top-1/2 right-3 -translate-y-1/2 font-medium text-[1.2rem]">
        ₾
      </h1>
    ) : (
      filter === "ფართობი" && (
        <div className="absolute top-1/2 right-6 -translate-y-1/2">
          <p
            style={{ text: "#021526B2", opacity: 0.7 }}
            className="font-medium text-[1.6rem]"
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
      )
    );

  return (
    <div>
      <div className="flex gap-[1.5rem] mr-5">
        <div
          className={`flex flex-col ${error ? "gap-[3.4rem]" : "gap-[2.4rem]"}`}
        >
          <div className="relative">
            {error && (
              <h2 className="absolute -bottom-10 left-0 text-nowrap text-[1.4rem] text-customRed">
                {error}
              </h2>
            )}
            <input
              style={{
                border: error ? "1px solid #F93B1D" : "1px solid #808A93",
                WebkitAppearance: "none", // Disable arrows in Chrome, Safari, etc.
                MozAppearance: "textfield", // Disable arrows in Firefox
              }}
              value={minValue}
              onChange={handleMinValueChange}
              type="number"
              placeholder="დან"
              className="rounded-[0.6rem] h-[4.2rem] w-[15.5rem] p-[1rem]
           text-[1.4rem] border bg-custom-inputBorderColor bg-red"
            />
            {value}
          </div>
          <div className="flex flex-col gap-[1.6rem]">
            {filter === "საფასო კატეგორია" && (
              <h3 className="text-[1.4rem] font-medium">მინ. ფასი</h3>
            )}
            {filter === "ფართობი" && (
              <div className="flex items-center gap-2">
                <h3 className="text-[1.4rem] font-medium">მინ. </h3>
                <div className="relative">
                  <p
                    style={{ text: "#021526B2" }}
                    className="font-medium text-[1.4rem]"
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
            )}

            <div className="flex flex-col gap-[0.4rem]">
              {filter === "საფასო კატეგორია" &&
                values.map((value) => {
                  return (
                    <p
                      onClick={() => dispatch(updateMinPrice(value))}
                      className="text-[1.4rem] font-normal hover:cursor-pointer"
                      key={value}
                    >
                      {value / 1000},000 ₾
                    </p>
                  );
                })}
              {filter === "ფართობი" &&
                values.map((value) => {
                  return (
                    <div
                      onClick={() => dispatch(updateMinArea(value))}
                      className="flex gap-2 hover:cursor-pointer"
                      key={value}
                    >
                      <p className="text-[1.4rem] font-normal">{value}</p>
                      <div className="relative">
                        <p
                          style={{ text: "black" }}
                          className="font-normal text-[1.5rem]"
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
                  );
                })}
            </div>
          </div>
        </div>
        <div
          className={`flex flex-col ${error ? "gap-[3.4rem]" : "gap-[2.4rem]"}`}
        >
          <div className="relative">
            <input
              style={{
                border: error ? "1px solid #F93B1D" : "1px solid #808A93",
                WebkitAppearance: "none", // Disable arrows in Chrome, Safari, etc.
                MozAppearance: "textfield", // Disable arrows in Firefox
              }}
              value={maxValue}
              onChange={handleMaxValueChange}
              type="number"
              placeholder="მდე"
              className="rounded-[0.6rem] h-[4.2rem] w-[15.5rem] p-[1rem]
          text-[1.4rem] border bg-custom-inputBorderColor bg-red"
            />
            {value}
          </div>
          <div className="flex flex-col gap-[1.6rem]">
            {filter === "საფასო კატეგორია" && (
              <h3 className="text-[1.4rem] font-medium">მაქს. ფასი</h3>
            )}
            {filter === "ფართობი" && (
              <div className="flex items-center gap-2">
                <h3 className="text-[1.4rem] font-medium">მინ. </h3>
                <div className="relative">
                  <p
                    style={{ text: "#021526B2" }}
                    className="font-medium text-[1.4rem]"
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
            )}
            <div className="flex flex-col gap-[0.4rem]">
              {filter === "საფასო კატეგორია" &&
                values.map((value) => {
                  return (
                    <p
                      onClick={() => dispatch(updateMaxPrice(value))}
                      className="text-[1.4rem] font-normal hover:cursor-pointer"
                      key={value}
                    >
                      {value / 1000},000 ₾
                    </p>
                  );
                })}
              {filter === "ფართობი" &&
                values.map((value) => {
                  return (
                    <div
                      onClick={() => dispatch(updateMaxArea(value))}
                      className="flex gap-2 hover:cursor-pointer"
                      key={value}
                    >
                      <p className="text-[1.4rem] font-normal">{value}</p>
                      <div className="relative">
                        <p
                          style={{ text: "black" }}
                          className="font-normal text-[1.5rem]"
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
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterOptionsPricesOrArea;
