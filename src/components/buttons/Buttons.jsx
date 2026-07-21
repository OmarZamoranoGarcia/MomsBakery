import "./Buttons.scss";
import { FaSquareFacebook } from "react-icons/fa6";
import { MdOutlineChat } from "react-icons/md";
import { FaInstagram } from "react-icons/fa";

function WhatsAppButton() {
  return (
    <button className="nav-button nav-button-whatsapp">
      <MdOutlineChat />
      WhatsApp
    </button>
  );
}

function InstargramButton() {
  return (
    <button className="nav-button nav-button-instagram">
      <FaInstagram />
      Instagram
    </button>
  );
}

function FacebookButton() {
    return (
    <button className="nav-button nav-button-facebook">
      <FaSquareFacebook />
      Facebook
    </button>
  );
}

export { WhatsAppButton, InstargramButton, FacebookButton };
