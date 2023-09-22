import Class from "./HomePage.module.css";
import {useState} from "react";
import Article from "../components/Article";

function HomePage() {
  const [result, setResult] = useState("");
  const [text, setText] = useState("");
  const [articles, setArticles] = useState([]);
  const notAKeyPushedToGithub = "4d251c9cc0fb40a0b202812f573fb7e0"; // a harmless key for newsapi.com so i'm not worrying about protecting it

  const submitHandler = async (e) => {
    setResult("Pending...");
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/translate/${text}`, {
        method: "GET",
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setResult(data.translation);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const fetchHandler = async () => {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=jp&apiKey=${notAKeyPushedToGithub}&pageSize=100`,
      {
        method: "GET",
      }
    );
    if (res.ok) {
      const data = await res.json();
      console.log(data.articles);
      setArticles([...data.articles]);
    }
  };
  const inputHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <div className={Class.container}>
      <form>
        <div>
          <input type="text" onChange={inputHandler} />
          <input type="submit" value="Translate" onClick={submitHandler} />
        </div>
      </form>
      <div>
        <h1>Result</h1>
        <section>{result}</section>
      </div>
      <button onClick={fetchHandler}>Get Articles</button>

      {articles.map((data) => (
        <Article data={data} key={data.url} />
      ))}
    </div>
  );
}

export default HomePage;
