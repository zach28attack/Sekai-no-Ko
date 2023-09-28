import Class from "./HomePage.module.css";
import {useEffect, useState} from "react";
import Article from "../components/articles/Article";
import Navbar from "../components/shared/Navbar";

function HomePage() {
  const [articles, setArticles] = useState([]);
  const notAKeyPushedToGithub = "4d251c9cc0fb40a0b202812f573fb7e0"; // a harmless key for newsapi.com so i'm not worrying about protecting it

  const fetchArticles = async () => {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${notAKeyPushedToGithub}&pageSize=100`,
      {
        method: "GET",
      }
    );
    if (res.ok) {
      const data = await res.json();
      setArticles([...data.articles]);
    }
  };

  const inputHandler = (e) => {
    setText(e.target.value);
  };
  useEffect(() => {
    fetchArticles();
  }, []);

  return (
    <div className={Class.container} id="modalTarget">
      <Navbar />
      <div className={Class.articles}>
        {articles.map((data, index) => (
          <Article key={index} data={data} />
        ))}
      </div>
    </div>
  );
}

export default HomePage;
