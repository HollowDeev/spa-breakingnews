import logo from "../../assets/LogoBN.png"
import { MagnifyingGlass } from "@phosphor-icons/react";
import "./Navbar.css"

export function Navbar() {
  return (
    <>
      <nav>
        <div className="input-search-space">
            <MagnifyingGlass size={20} color="#757575" />
          <input type="text" placeholder="Pesquise por um título"/>
        </div>

        <img src={logo} alt="Logo do Breaking News" />

        <button>Entrar</button>
      </nav>
    </>
  );
}
