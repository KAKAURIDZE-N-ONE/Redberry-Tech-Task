import { useState } from "react";

function FilterOptionsPrices({ values }) {
  const [minPrice, setMinPrice] = useState();
  const [maxPrice, setMaxPrice] = useState();

  return (
    <div>
      <div className="flex gap-[1.5rem]">
        <input
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          type="number"
          placeholder="დან"
          className="border border-custom-inputBorderColor rounded-[0.6rem] h-[4.2rem] w-[15.5rem] p-[1rem]
          text-[1.4rem]"
        />
        <input
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          type="number"
          className="border border-custom-inputBorderColor"
        />
      </div>
      {values.map((value) => {
        return <h1 key={value}>{value}</h1>;
      })}
    </div>
  );
}

export default FilterOptionsPrices;
