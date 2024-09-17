import Mark from "../../public/svgs/Mark.svg";

function NormalInput({ register, name, label, errors, validate }) {
  return (
    <div className="flex flex-col gap-[0.4rem]">
      <div className="flex flex-col gap-[0.5rem]">
        <label
          style={{ color: "#021526" }}
          className="text-[1.4rem] font-medium"
          htmlFor={name}
        >
          {label}
        </label>
        <div className="relative">
          <input
            style={{ border: "1px solid #808A93" }}
            className="w-[38.4rem] h-[4.2rem] rounded-[0.6rem] text-[1.6rem] px-4"
            id={name}
            {...register(name, validate)}
          />
          {errors[name] && (
            <div className="absolute left-0 bottom-[-2.1rem] flex gap-[0.7rem] items-center">
              <img src={Mark} alt="mark" className="w-[1rem] h-[0.8rem]" />
              <p className="text-[1.4rem] text-customRed">
                {errors[name].message}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NormalInput;
