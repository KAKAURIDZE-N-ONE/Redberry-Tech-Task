function RentOrSellTeg({ type, size }) {
  return (
    <div
      className={`absolute flex items-center justify-center 
                rounded-full ${
                  size === "big"
                    ? "py-[1rem] px-[2.5rem] top-[4rem] left-[4rem]"
                    : "py-[0.6rem] px-[1.2rem] top-[2rem] left-[2rem]"
                }`}
      style={{ backgroundColor: "#02152680" }}
    >
      <div className="relative">
        <div className="opacity-50">
          <h4
            className={`font-medium text-white ${
              size === "big" ? "text-[2rem]" : "text-[1.2rem]"
            } tracking-wide opacity-0`}
          >
            {type}
          </h4>
        </div>
        <h4
          className={`top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                  absolute font-medium text-white ${
                    size === "big" ? "text-[2rem]" : "text-[1.2rem]"
                  } tracking-wide opacity-1`}
        >
          {type}
        </h4>
      </div>
    </div>
  );
}

export default RentOrSellTeg;
