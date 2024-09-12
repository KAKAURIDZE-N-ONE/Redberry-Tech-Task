function FilterRoomsQuantity({ values }) {
  return (
    <div className="grid grid-cols-5 grid-flow-row gap-3">
      {values.map((value) => {
        return (
          <div
            style={{ border: "1px solid #808A93" }}
            className="w-[4.2rem] h-[4.2rem] rounded-[0.6rem] flex items-center justify-center"
            key={value}
          >
            <p
              style={{ color: "#02152666" }}
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
