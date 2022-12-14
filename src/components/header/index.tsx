import Image from "next/image";
import { HeaderContainer, HeaderNav } from "./styles";
import Logo from "../../public/logo.svg";
import { NavLink } from "../Link";
import { MainButton } from "../button/styles";

export function Header() {
  return (
    <HeaderContainer>
      <NavLink href="/">
        <Image src={Logo} alt={"Larissa Longobardi"} />
      </NavLink>
      <HeaderNav>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/sobre">Sobre</NavLink>
        <NavLink href="/consulta">Consulta</NavLink>
        <NavLink href="/contato">Contato</NavLink>
        <MainButton>Agendar</MainButton>
      </HeaderNav>
    </HeaderContainer>
  );
}
