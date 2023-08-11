import { useState, useEffect } from "react";

import { Card } from "../../components/Card/Card";
import { Navbar } from "../../components/Navbar/Navbar";
import { getAllPosts } from "../../services/newsServices";
import { HomeBody } from "./HomeStyled";

export default function Home() {
  const [news, setNews] = useState([]);

  async function findAllPosts() {
    try {
      const response = await getAllPosts();
      setNews(response.data.results);
    } catch (error) {
      console.log(error);
    }
  }

  
  useEffect(() => {
    findAllPosts()
  }, [])

  return (
    <>
      <Navbar />
      <HomeBody>
        {news.map((item) => (
          <Card 
            key={item.id} 
            title={item.title} 
            text={item.text} 
            banner={item.banner}
            likes={item.likes.length}
            comments={item.comments.length}
          />
        ))}
      </HomeBody>
    </>
  );
}
