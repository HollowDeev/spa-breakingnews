import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { searchNews } from "../../services/newsServices";
import { Card } from "../../components/Card/Card";
import { ContainerResults, SearchNews, TextResults } from "./SearchStyled";

export function Search() {
  const { title } = useParams();
  const [news, setNews] = useState([]);

  useEffect(() => search, [title]);

  async function search() {
    try {
      const newsAPI = await searchNews(title);
      setNews(newsAPI.data.results);
      console.log(newsAPI.data);
    } catch (err) {
      setNews([]);
      console.log(err);
    }
  }

  

  return (
    <ContainerResults>
      <TextResults>
        <span>
          {
            news.length != 0 ? `Encontramos ${news.length} ${news.length > 1 ? "resultados" : "resultado"} para:` : `Não encontramos nenhum resultado para:`
          }
          <h2>{title}</h2>
        </span>
      </TextResults>

      <SearchNews>
        {news.map((item) => (
          <Card
            key={item.id}
            title={item.title}
            text={item.text}
            banner={item.banner}
            likes={item.likes}
            comments={item.comments}
          />
        ))}
      </SearchNews>
    </ContainerResults>
  );
}
