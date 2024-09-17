import { useGetActiveFilterValues } from "../hooks/useGetActiveFilterValues";
import ActiveMark from "../../public/svgs/ActiveMark.svg";
import InactiveMark from "../../public/svgs/InactiveMark.svg";
import { useQuery } from "@tanstack/react-query";
import { getRegions } from "../services/apiRegionsAndCities";
import { useEffect } from "react";

function FilterOptionsRegion({ choosedRegions, setChoosedRegions }) {
  const {
    data: regions,
    isPending,
    error,
  } = useQuery({
    queryKey: ["regions"],
    queryFn: getRegions,
  });

  const activeRegions = useGetActiveFilterValues("regions");

  useEffect(() => {
    setChoosedRegions(activeRegions);
  }, []);

  function handleCheckMarkClick(value) {
    if (!value) return;

    if (choosedRegions.includes(value))
      setChoosedRegions((regions) => regions.filter((el) => el !== value));
    else setChoosedRegions((regions) => [...regions, value]);
  }

  return (
    <ul className="grid grid-rows-4 grid-flow-col gap-x-[5rem] gap-y-[1.5rem] mr-[6rem] relative">
      {isPending && (
        <span className="loader2 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"></span>
      )}
      {regions?.map((value) => (
        <li
          onClick={() => handleCheckMarkClick(value.name)}
          key={value.id}
          className="flex items-center gap-[0.8rem] hover:cursor-pointer"
        >
          {choosedRegions.includes(value.name) ? (
            <img
              src={ActiveMark}
              alt="Check Mark "
              className="w-[2rem] h-[2rem] opacity-anime"
            />
          ) : (
            <img
              src={InactiveMark}
              alt="Check Mark"
              className="w-[2rem] h-[2rem]"
            />
          )}

          <p className="text-nowrap text-[1.4rem]">{value.name}</p>
        </li>
      ))}
    </ul>
  );
}

export default FilterOptionsRegion;
