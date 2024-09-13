import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { updateAgentModalIsOpen } from "../slices/mainSlice";

function Modal({ children }) {
  const dispatch = useDispatch();

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => (document.body.style.overflow = "auto");
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center">
      <div
        onClick={() => dispatch(updateAgentModalIsOpen(false))}
        className="fixed top-0 left-0 right-0 bottom-0 "
        style={{
          backdropFilter: "blur(4px)",
          backgroundColor: "#02152657",
          opacity: "34",
        }}
      ></div>
      {children}
    </div>
  );
}

export default Modal;
