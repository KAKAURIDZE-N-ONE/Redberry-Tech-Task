import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { useSelector } from "react-redux";
import { getAgentModelIsOpen } from "../slices/mainSlice";
import { createPortal } from "react-dom";
import Modal from "./Modal";
import CreateAgentModalBody from "./CreateAgentModalBody";

function Layout() {
  const agentModalIsOpen = useSelector(getAgentModelIsOpen);

  console.log(agentModalIsOpen);

  return (
    <div>
      {agentModalIsOpen &&
        createPortal(
          <Modal>
            <CreateAgentModalBody />
          </Modal>,
          document.body
        )}
      <NavBar />
      <Outlet />
    </div>
  );
}

export default Layout;
