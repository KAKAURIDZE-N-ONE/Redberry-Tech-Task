import { LuPlus } from "react-icons/lu";

function Button({ children, icon, type }) {
  const backgroundColor = type === "filled" ? "#F93B1D" : "#fff";
  const borderColor = type === "filled" ? "#F93B1D" : "#F93B1D";
  const color = type === "filled" ? "#fff" : "#F93B1D";

  const BUTTON_STYLE = {
    backgroundColor,
    border: `1px solid ${borderColor}`,
    color,
  };

  return (
    <div
      style={BUTTON_STYLE}
      className={`rounded-[1rem] px-[1.6rem] py-[1.1rem] ${type} inline-block`}
    >
      <div className="w-full h-full flex items-center justify-center font-medium gap-[0.2rem]">
        {icon === "plus" && <LuPlus fontSize={22} />}
        <h3 className="text-[1.6rem]">{children}</h3>
      </div>
    </div>
  );
}

export default Button;
