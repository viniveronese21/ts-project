import Image from "next/image";
import { HeaderButton, HeaderContainer, HeaderNav } from "./styles";
import Logo from "../../public/logo.svg";
import { NavLink } from "../Link";

export function Header() {
  return (
    <HeaderContainer>
      <Image src={Logo} alt={"Larissa Longobardi"} />
      <HeaderNav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/sobre">Sobre</NavLink>
        <NavLink href="/consulta">Consulta</NavLink>
        <NavLink href="/contato">Contato</NavLink>
        <HeaderButton>Agendar</HeaderButton>
      </HeaderNav>
    </HeaderContainer>
  );
}
