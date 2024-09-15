import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMinPrice, updateMinPrice } from "../slices/filtersSlice";

function FilterOptionsPrices({ values, filter }) {
  const minPrice = useSelector(getMinPrice);
  const dispatch = useDispatch();
  const [minPriceOrMinArea, setMinPriceOrMinArea] = useState();
  const [maxPriceOrMaxArea, setMaxPriceOrMaxArea] = useState();

  useEffect(() => {}, [minPriceOrMinArea, maxPriceOrMaxArea]);

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
        <div className="flex flex-col gap-[2.4rem]">
          <div className="relative">
            <input
              style={{
                border: "1px solid #808A93",
                WebkitAppearance: "none", // Disable arrows in Chrome, Safari, etc.
                MozAppearance: "textfield", // Disable arrows in Firefox
              }}
              value={minPrice}
              onChange={(e) => dispatch(updateMinPrice(e.target.value))}
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
                    <p className="text-[1.4rem] font-normal" key={value}>
                      {value / 1000},000 ₾
                    </p>
                  );
                })}
              {filter === "ფართობი" &&
                values.map((value) => {
                  return (
                    <div
                      onClick={() => handleminPriceOrMinAreaClick(value)}
                      className="flex gap-2"
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
        <div className="flex flex-col gap-[2.4rem]">
          <div className="relative">
            <input
              style={{
                border: "1px solid #808A93",
                WebkitAppearance: "none", // Disable arrows in Chrome, Safari, etc.
                MozAppearance: "textfield", // Disable arrows in Firefox
              }}
              value={maxPriceOrMaxArea}
              onChange={(e) => setMaxPriceOrMaxArea(e.target.value)}
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
                    <p className="text-[1.4rem] font-normal" key={value}>
                      {value / 1000},000 ₾
                    </p>
                  );
                })}
              {filter === "ფართობი" &&
                values.map((value) => {
                  return (
                    <div className="flex gap-2" key={value}>
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

export default FilterOptionsPrices;
