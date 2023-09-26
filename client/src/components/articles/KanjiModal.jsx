import Class from "./KanjiModal.module.css";
import gTranslate from "../../modules/GoogleTranslate";
import kanjiSearch from "../../modules/KanjiSearch";
import {useEffect, useState} from "react";

function KanjiModal({kanji}) {
  const [meanings, setMeanings] = useState({});
  const [translation, setTranslation] = useState("");

  const constituants = kanji.split("");
  const getMeaningsOfConstituants = () => {
    constituants.forEach(async (kanji) => {
      const meaning = await kanjiSearch(kanji);
      setMeanings((prev) => ({...prev, [kanji]: meaning}));
    });
  };

  const getTranslation = async () => {
    const translatedKanji = await gTranslate(kanji);
    setTranslation(translatedKanji);
  };

  useEffect(() => {
    getMeaningsOfConstituants();
    getTranslation();
  }, []);

  return (
    <div className={Class.container}>
      <div>
        {kanji} - {translation || "loading..."}
      </div>
      <ul>
        {constituants.map((kanji) => {
          return (
            <li key={kanji}>
              {kanji} - {meanings[kanji] || "Loading..."}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default KanjiModal;
