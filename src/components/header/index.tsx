import Image from "next/image";
import { HeaderContainer, HeaderNav } from "./styles";
import Logo from "../../public/logo.svg";
import { Link } from "../Link";
import { MainButton } from "../button/styles";

export function Header() {
  return (
    <HeaderContainer>
      <Link href="/">
        <Image src={Logo} alt={"Larissa Longobardi"} />
      </Link>
      <HeaderNav>
        <Link href="/">Home</Link>
        <Link href="/sobre">Sobre</Link>
        <Link href="/consulta">Consulta</Link>
        <Link href="/contato">Contato</Link>
      </HeaderNav>
      <MainButton>Agendar</MainButton>
    </HeaderContainer>
  );
}
