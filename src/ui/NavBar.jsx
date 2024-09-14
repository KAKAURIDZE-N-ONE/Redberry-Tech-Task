import Logo from "../../public/svgs/Logo.svg";
function NavBar() {
  return (
    <div className="border border-custom-borderColor sticky left-0 top-0 right-0 z-40 bg-white">
      <div className="wrapper h-[10rem] flex items-center">
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  );
}

export default NavBar;
