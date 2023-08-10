import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
  padding: 1rem 1rem;
  background-color: #fff;
  z-index: 1;
  box-shadow: rgba(17, 17, 26, 0.1) 0px 1px 0px;
`;

export const ImageLogo = styled.img`
  width: 8rem;
  height: 3.5rem;
  object-fit: cover;
  cursor: pointer;
`;

export const InputSpace = styled.div`
  position: relative;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  

  div {
    position: absolute;
    right: 0.1rem;
    z-index: 10;
    border: none;
    background-color: #f5f5f5;
    border-radius: 0.3rem;
    padding: 0.4rem;
  }

  input {
    outline: none;
    font-size: 1rem;
    padding: 0.6rem;
    background-color: #f5f5f5;
    border: none;
    width: 80%;
    border-radius: 0.3rem;

    &:focus {
      border: 1px solid #0bade3;
    }
  }
`;

export const Button = styled.button`
  background-color: #0bade3;
  border: none;
  outline: none;
  font-size: 1rem;
  text-transform: uppercase;
  padding: 0.4rem 1rem;
  color: #fff;
  transition: all 0.4s ease-in-out;
  cursor: pointer;
  border-radius: 0.3rem;
  font-family: Roboto, arial;
  font-weight: 500;
  letter-spacing: 0.1rem;

  &:hover {
    background-color: #0a86af;
  }
`;