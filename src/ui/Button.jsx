import { useState } from "react";
import { LuPlus } from "react-icons/lu";

function Button({ children, icon, type, size, fontSize, clickFn, isInForm }) {
  const [isHovering, setIsHovering] = useState(false);
  const backgroundColor =
    type === "filled" && isHovering
      ? "#DF3014"
      : type === "filled" && !isHovering
      ? "#F93B1D"
      : type === "outline" && isHovering
      ? "#F93B1D"
      : type === "erase" && isHovering
      ? "#808A93"
      : "#fff";

  console.log(backgroundColor);
  const borderColor =
    type === "filled" ? "#F93B1D" : type === "erase" ? "#676E76" : "#F93B1D";
  const color =
    type === "filled" || (type === "outline" && isHovering)
      ? "#fff"
      : type === "erase" && !isHovering
      ? "#676E76"
      : type === "erase" && isHovering
      ? "white"
      : "#F93B1D";

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

  const handleClick = () => {
    if (clickFn) {
      clickFn();
    }
  };

  return (
    <button
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      type={isInForm ? "submit" : "button"}
      style={BUTTON_STYLE}
      onClick={handleClick}
      className={`rounded-[1rem]  inline-block cursor-pointer transition-all duration-200`}
    >
      <div className="w-full h-full flex items-center justify-center font-medium gap-[0.2rem]">
        {/* {icon === "plus" && <LuPlus fontSize={22} />} */}
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
    </button>
  );
}

export default Button;
