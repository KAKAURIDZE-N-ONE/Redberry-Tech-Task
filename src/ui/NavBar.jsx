import { Link } from "react-router-dom";
import Logo from "../../public/svgs/Logo.svg";
function NavBar() {
  return (
    <div className="border border-custom-borderColor sticky left-0 top-0 right-0 z-50 bg-white">
      <div className="wrapper h-[10rem] flex items-center">
        <Link to={"/"}>
          <img src={Logo} alt="Logo" />
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
