import Class from "./Article.module.css";
import KanjiWrapper from "./kanjiWrapper";
import {useEffect, useState} from "react";

function Article({data}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");

  const wrapKanji = (type, str) => {
    if (!str) return;
    const jpREGEX = /[\u4e00-\u9faf]/; // regex for kanji by Unicode range
    const strArr = str.split("");

    // iterate through string and wrap words/names
    let word = "";
    const wrappedKanji = strArr.map((str, index) => {
      const isKanji = jpREGEX.test(str);
      if (isKanji === true) word = `${word}${str}`;
      else if (word.length > 0) {
        // wrap word and insert into string
        const wrappedKanji = <KanjiWrapper>{word}</KanjiWrapper>;
        word = ""; // reset var
        return [wrappedKanji, str];
      } else {
        return str;
      }
    });
    type === "title"
      ? setTitle(wrappedKanji)
      : type === "description"
      ? setDescription(wrappedKanji)
      : setAuthor(wrappedKanji);
  };
  useEffect(() => {
    wrapKanji("title", data.title);
    wrapKanji("description", data.description);
    wrapKanji("author", data.author);
  }, [data]);

  return (
    <div className={Class.container}>
      <header className={Class.title}>{title}</header>
      <div className={Class.content}>
        <img src={data.urlToImage ? data.urlToImage : ""} alt="Article Picture" />
        <div>
          <sub>{author}</sub>
          <p>{description}</p>
          <a href={data.url}>link to article</a>
        </div>
      </div>
    </div>
  );
}

export default Article;
