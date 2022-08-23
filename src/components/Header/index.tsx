import { HeaderContainer } from "./styles";

import logo from "../../assets/logo.svg";
import left from "../../assets/effect-left.svg";
import right from "../../assets/effect-right.svg";

function Header() {
  return (
    <HeaderContainer>
      <img src={left} alt="Effect" />
      <img src={logo} alt="Logo" />
      <img src={right} alt="Effect" />
    </HeaderContainer>
  );
}

export { Header };
