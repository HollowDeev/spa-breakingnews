import { ChatText, ThumbsUp } from "@phosphor-icons/react";
import { CardContainer, CardBody, CardFooter } from "./CardStyle";
import TextLimit from "../TextLimit/TextLimit";

export function Card(props) {
  return (
    <CardContainer>
      <CardBody>
        <div>
          <h2>{props.title}</h2>
          <TextLimit text={props.text} limit={150}/>
        </div>

        <img src={props.banner} alt="Imagem" />
      </CardBody>

      <CardFooter>
        <div id="curtidas">
          <ThumbsUp size={20} color="#1a1a1a" />
          <span>{props.likes}</span>
        </div>
        <div id="comentarios">
          <ChatText size={20} color="#1a1a1a" />
          <span>{props.comments}</span>
        </div>
      </CardFooter>

    </CardContainer>
  );
}
