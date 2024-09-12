import { IoMdClose } from "react-icons/io";

const choosedFilters = [
  {
    field: "რეგიონი",
    values: ["თბილისი"],
  },
  {
    field: "ფართობი",
    values: [
      {
        from: 55,
        to: 90,
      },
    ],
  },
  {
    field: "საფასო კატეგორია",
    values: [
      {
        from: 20000,
        to: 100000,
      },
    ],
  },
  {
    field: "საძინებლების რაოდენობა",
    values: [1],
  },
];

function ChoosedFilters() {
  return (
    <div className="flex gap-[0.8rem] mt-[1.8rem] items-center">
      {choosedFilters.map((filter) => {
        const { values, field } = filter;
        return values.map((value) => {
          if (field === "რეგიონი")
            return (
              <div
                key={value}
                className="flex items-center justify-center gap-[0.4rem] border border-custom-borderColor
                px-[1rem] py-[0.6rem] rounded-full tracking-wide"
              >
                <p
                  style={{ color: "#021526CC" }}
                  className="text-[1.4rem] font-normal"
                >
                  {value}
                </p>
                <IoMdClose
                  color="#021526CC"
                  fontSize={14}
                  className="cursor-pointer"
                />
              </div>
            );
          if (field === "ფართობი")
            return (
              <div
                className="flex items-center justify-center gap-[0.4rem] border border-custom-borderColor
                px-[1rem] py-[0.6rem] rounded-full tracking-wide"
                key={String(value.from) + String(value.to)}
              >
                <div className="flex gap-1">
                  <p
                    style={{ color: "#021526CC" }}
                    className="text-[1.4rem] font-normal"
                  >
                    {value.from}
                  </p>
                  <div className="relative">
                    <p
                      style={{ color: "#021526CC" }}
                      className="font-normal text-[1.4rem]"
                    >
                      მ
                    </p>
                    <p
                      style={{ color: "#021526CC" }}
                      className="absolute top-0 -right-3 text-[1.1rem]"
                    >
                      2
                    </p>
                  </div>
                  <h1
                    style={{ color: "#021526CC" }}
                    className="text-[1.4rem] font-normal ml-5 mr-2"
                  >
                    -
                  </h1>
                  <p
                    style={{ color: "#021526CC" }}
                    className="text-[1.4rem] font-normal"
                  >
                    {value.to}
                  </p>
                  <div className="relative">
                    <p
                      style={{ color: "#021526CC" }}
                      className="font-normal text-[1.4rem]"
                    >
                      მ
                    </p>
                    <p
                      style={{ color: "#021526CC" }}
                      className="absolute top-0 -right-3 text-[1.1rem]"
                    >
                      2
                    </p>
                  </div>
                </div>
                <IoMdClose
                  fontSize={14}
                  color="#021526CC"
                  className="ml-3 cursor-pointer"
                />
              </div>
            );
          if (field === "საფასო კატეგორია")
            return (
              <div
                key={value}
                className="flex items-center justify-center gap-[0.4rem] border border-custom-borderColor
                px-[1rem] py-[0.6rem] rounded-full tracking-wide"
              >
                <div>
                  {" "}
                  <p
                    style={{ color: "#021526CC" }}
                    className="text-[1.4rem] font-normal"
                  >
                    {value.from}₾ - {value.to}₾
                  </p>
                </div>
                <IoMdClose
                  color="#021526CC"
                  fontSize={14}
                  className="cursor-pointer"
                />
              </div>
            );
          if (field === "საძინებლების რაოდენობა")
            return (
              <div
                key={value}
                className="flex items-center justify-center gap-[0.4rem] border border-custom-borderColor
                px-[1rem] py-[0.6rem] rounded-full tracking-wide"
              >
                <p
                  style={{ color: "#021526CC" }}
                  className="text-[1.4rem] font-normal"
                >
                  {value}
                </p>
                <IoMdClose
                  color="#021526CC"
                  fontSize={14}
                  className="cursor-pointer"
                />
              </div>
            );
        });
      })}
      {choosedFilters.length > 0 && (
        <p className="text-[1.4rem] font-medium ml-4 cursor-pointer">
          გასუფთავება
        </p>
      )}
    </div>
  );
}

export default ChoosedFilters;
