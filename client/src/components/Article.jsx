import Class from "./Article.module.css";
import JapaneseParser from "../../JapaneseParser";

function Article({data}) {
  const title = JapaneseParser(data.title);
  return (
    <div className={Class.container}>
      <img src={data.urlToImage ? data.urlToImage : ""} alt="Article Picture" />
      <h1>{data.title ? data.title : ""}</h1>
      <sub>{data.author ? data.author : ""}</sub>
      <p>{data.description ? data.description : ""}</p>
      <p>{data.content ? data.content : ""}</p>
      <a href={data.url}>link to article</a>
    </div>
  );
}

export default Article;
