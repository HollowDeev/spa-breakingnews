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
  

  button {
    position: absolute;
    right: 0.1rem;
    z-index: 10;
    border: none;
    background-color: #f5f5f5;
    border-radius: 0.3rem;
    padding: 0.4rem;
    cursor: pointer;
  }

  button:hover{
    box-shadow: 5px 0px #757575;
    transition: all 50ms ease-in;
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
`

export const ErrorSpan = styled.span`
  background-color: #ffcccc;
  color: #970000;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 7px;
`