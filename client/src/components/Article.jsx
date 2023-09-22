import Class from "./Article.module.css";

function Article({data}) {
  return (
    <div className={Class.container}>
      <img src={data.urlToImage ? data.urlToImage : ""} alt="Article Picture" />
      <h1>{data.title ? data.title : ""}</h1>
      <sub>{data.author ? data.author : ""}</sub>
      <p>{data.description ? data.description : ""}</p>
      <p>{data.content ? data.content : ""}</p>
    </div>
  );
}

export default Article;
