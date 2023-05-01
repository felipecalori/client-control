import { FooterBox, FooterContact } from "./styles";
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <FooterBox>
      <h3>
        LC<span>sistem</span>
      </h3>
      <FooterContact>
        <FaLinkedin />
        <FaGithub />
      </FooterContact>
    </FooterBox>
  );
}

export default Footer;
