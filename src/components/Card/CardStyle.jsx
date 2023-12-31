import { styled } from "styled-components";

export const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 100%;
  box-shadow: rgba(50, 50, 105, 0.15) 0px 2px 5px 0px,
    rgba(0, 0, 0, 0.5) 0px 1px 1px 0px;
  border-radius: 20px;
  background-color: #fff;
`;

export const CardBody = styled.article`
  display: flex;
  align-items: center;
  height: 100%;
  width: 100%;


  img {
    width: 30%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    border-radius: 0px 20px 20px 0px;
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 2rem;
    width: 100%;
    height: 100%;
  }
`;

export const CardHeader = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;

  font-size: ${(props) => (props.top ? "1.5rem" : ".9rem")};

  h2 {
    margin-bottom: 1rem;
    font-size: ${(props) => (props.top ? "3.5rem" : "2rem")};
  }
`;


export const CardFooter = styled.article`
  display: flex;
  align-items: center;
  gap: 1rem;

  section {
    display: flex;
    align-items: center;
    gap: 0.3rem;
  }
`;
