import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";
import { useDispatch, useSelector } from "react-redux";
import {
  getAgentModelIsOpen,
  resetAgentInfo,
  updateAgentModalIsOpen,
} from "../slices/agentSlice";
import { createPortal } from "react-dom";
import Modal from "./Modal";
import CreateAgentModalBody from "./CreateAgentModalBody";

function Layout() {
  const dispatch = useDispatch();
  const agentModalIsOpen = useSelector(getAgentModelIsOpen);

  return (
    <div>
      {agentModalIsOpen &&
        createPortal(
          <Modal
            clearFn={() => dispatch(resetAgentInfo())}
            turnOfFn={() => dispatch(updateAgentModalIsOpen(false))}
          >
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
