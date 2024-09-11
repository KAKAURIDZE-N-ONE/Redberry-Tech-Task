import Logo from "../../public/svgs/Logo.svg";
function NavBar() {
  return (
    <div className="border border-custom-borderColor">
      <div className="wrapper h-[10rem] flex items-center">
        <img src={Logo} alt="Logo" />
      </div>
    </div>
  );
}

export default NavBar;
