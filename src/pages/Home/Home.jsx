import { useState, useEffect } from "react";

import { Card } from "../../components/Card/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { getAllNews, getTopNews } from "../../services/newsServices";
import { HomeBody, HomeHeader } from "./HomeStyled";

export default function Home() {
  const [news, setNews] = useState([]);
  const [topNews, setTopNews] = useState({});

  async function findAllNews() {
    try {
      const allNewsResponse = await getAllNews();
      setNews(allNewsResponse.data.results);

      const topNewsResponse = await getTopNews();
      setTopNews(topNewsResponse.data.new);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    findAllNews();
  }, []);

  return (
    <>
      <HomeHeader>
        <Card
          title={topNews.title}
          text={topNews.text}
          banner={topNews.banner}
          likes={topNews.likes}
          comments={topNews.comments}
          top={true}
        />
      </HomeHeader>

      <HomeBody>
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
      </HomeBody>
    </>
  );
}
