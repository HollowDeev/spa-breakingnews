import { ChatText, ThumbsUp } from "@phosphor-icons/react";
import { CardContainer, CardBody, CardFooter } from "./CardStyle";

export function Card({ news }) {
  console.log(news);
  return (
    <CardContainer>
      <CardBody>
        <div>
          <h2>{news.title}</h2>
          <p>{news.text}</p>
        </div>

        <img src={news.image} alt="Imagem" />
      </CardBody>

      <CardFooter>
        <div id="curtidas">
          <ThumbsUp size={20} color="#1a1a1a" />
          <span>{news.likes}</span>
        </div>
        <div id="comentarios">
          <ChatText size={20} color="#1a1a1a" />
          <span>{news.comments}</span>
        </div>
      </CardFooter>

    </CardContainer>
  );
}
