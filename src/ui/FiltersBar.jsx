import FiltersBarItem from "./FiltersBarItem";

const filters = [
  "რეგიონი",
  "საფასო კატეგორია",
  "ფართობი",
  "საძინებლების რაოდენობა",
];

function FiltersBar() {
  return (
    <div className="border border-custom-borderColor inline-block rounded-[1rem] px-[0.6rem] py-[0.6rem]">
      <ul className="flex gap-[2.4rem] ">
        {filters.map((filter) => {
          return <FiltersBarItem key={filter} filter={filter} />;
        })}
      </ul>
    </div>
  );
}

export default FiltersBar;
