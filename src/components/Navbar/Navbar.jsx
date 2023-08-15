import logo from "../../assets/LogoBN.png";
import { MagnifyingGlass } from "@phosphor-icons/react";

import { Nav, ImageLogo, InputSpace, ErrorSpan } from "./Navbar-styled";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "../Button/Button";
import { searchSchema } from "../../schemas/searchSchema";


export function Navbar() {
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(searchSchema),
  });
  const navigate = useNavigate();

  function onSearch(data) {
    const { title } = data;
    navigate(`search/${title}`);
    reset();
  }

  return (
    <>
      <Nav>
        <form onSubmit={handleSubmit(onSearch)}>
          <InputSpace>
            <button type="submit">
              <MagnifyingGlass size={20} color="#757575" />
            </button>

            <input
              type="text"
              placeholder="Pesquise por um título"
              {...register("title")}
            />
          </InputSpace>
        </form>

        <Link to="/">
          <ImageLogo src={logo} alt="Logo do Breaking News" />
        </Link>

        <Link to='/auth'>
          <Button type="Button" text="Entrar" />
        </Link>
      </Nav>
      {errors.title && <ErrorSpan>{errors.title.message}</ErrorSpan>}
      <Outlet />
    </>
  );
}
