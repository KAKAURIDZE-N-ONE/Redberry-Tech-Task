import { LuPlus } from "react-icons/lu";

function Button({ children, icon, type, size, fontSize, clickFn }) {
  const backgroundColor = type === "filled" ? "#F93B1D" : "#fff";
  const borderColor =
    type === "filled" ? "#F93B1D" : type === "erase" ? "#676E76" : "#F93B1D";
  const color =
    type === "filled" ? "#fff" : type === "erase" ? "#676E76" : "#F93B1D";

  const BUTTON_STYLE = {
    backgroundColor,
    border: `1px solid ${borderColor}`,
    color,
    padding:
      size === "small"
        ? "0.6rem 1.4rem"
        : type === "erase"
        ? "0.7rem 1.4rem"
        : "1.1rem 1.6rem",
  };

  return (
    <div
      style={BUTTON_STYLE}
      onClick={clickFn}
      className={`rounded-[1rem] ${type} inline-block cursor-pointer`}
    >
      <div className="w-full h-full flex items-center justify-center font-medium gap-[0.2rem]">
        {icon === "plus" && <LuPlus fontSize={22} />}
        <h3
          style={{
            fontSize:
              size === "small" ? "1.4rem" : fontSize ? fontSize : "1.6rem",
          }}
          className="text-[1.6rem]"
        >
          {children}
        </h3>
      </div>
    </div>
  );
}

export default Button;
