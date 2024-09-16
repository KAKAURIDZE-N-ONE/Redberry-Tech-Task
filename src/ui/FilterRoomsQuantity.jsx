import { useEffect } from "react";
import { useGetActiveFilterValues } from "../hooks/useGetActiveFilterValues";

function FilterRoomsQuantity({ values, choosedBedrooms, setChoosedBedrooms }) {
  const activeBedrooms = useGetActiveFilterValues("bedrooms");

  useEffect(() => {
    console.log(activeBedrooms);
    setChoosedBedrooms(activeBedrooms);
  }, []);

  console.log(choosedBedrooms);

  function handleValueClick(value) {
    if (!value) return;
    if (choosedBedrooms.includes(value))
      setChoosedBedrooms((bedrooms) => bedrooms.filter((el) => el !== value));
    else setChoosedBedrooms((bedrooms) => [...bedrooms, value]);
  }
  return (
    <div className="grid grid-cols-5 grid-flow-row gap-3">
      {values.map((value) => {
        return (
          <div
            style={{
              border: choosedBedrooms.includes(String(value))
                ? "1px solid black"
                : "1px solid #808A93",
            }}
            className="w-[4.2rem] h-[4.2rem] rounded-[0.6rem] flex items-center justify-center hover:cursor-pointer"
            key={value}
            onClick={() => handleValueClick(String(value))}
          >
            <p
              style={{
                color: choosedBedrooms.includes(String(value))
                  ? "black"
                  : "#02152666",
              }}
              className="text-[1.4rem] font-normal"
            >
              {value}
            </p>
          </div>
        );
      })}
    </div>
  );
}

export default FilterRoomsQuantity;
