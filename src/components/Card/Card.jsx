import { ChatText, ThumbsUp } from "@phosphor-icons/react";
import { CardContainer, CardBody, CardFooter, CardHeader } from "./CardStyle";
import TextLimit from "../TextLimit/TextLimit";

export function Card(props) {
  const haveLikes = props.likes?.length > 0 ? true : false;

  return (
    <CardContainer>
      <CardBody>
        <div>

          <CardHeader top={props.top}>
            <h2>{props.title}</h2>
            <TextLimit text={props.text} limit={150} />
          </CardHeader>

          <CardFooter>
            <section id="curtidas">
              <ThumbsUp size={20} color="#1a1a1a" />
              <span>{props.likes?.length}</span>
            </section>
            <section id="comentarios">
              {props.likes?.length > 0 ? (
                <ChatText size={20} color="#1a1a1a" weight="fill" />
              ) : (
                <ChatText size={20} color="#1a1a1a" />
              )}
              <span>{props.comments?.length}</span>
            </section>
          </CardFooter>

        </div>

        <img src={props.banner} alt="Imagem" />
      </CardBody>
    </CardContainer>
  );
}
