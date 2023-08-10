import logo from "../../assets/LogoBN.png";
import { MagnifyingGlass } from "@phosphor-icons/react";

import { Button, Nav, ImageLogo, InputSpace } from "./Navbar-styled";

export function Navbar() {
  return (
    <>
      <Nav>
        <InputSpace>
          <div>
            <MagnifyingGlass size={20} color="#757575" />
          </div>

          <input type="text" placeholder="Pesquise por um título" />
        </InputSpace>

        <ImageLogo src={logo} alt="Logo do Breaking News" />

        <Button>Entrar</Button>
      </Nav>
    </>
  );
}
