import Class from "./KanjiModal.module.css";
import gTranslate from "../../modules/GoogleTranslate";
import kanjiSearch from "../../modules/KanjiSearch";
import {useEffect, useState} from "react";

function KanjiModal({kanji, setModalActive, mouseX, mouseY}) {
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

  const closeHandler = (e) => {
    if (e.target.id === "backdrop") setModalActive(false);
  };

  useEffect(() => {
    getMeaningsOfConstituants();
    getTranslation();
  }, []);

  return (
    <div className={Class.backdrop} id="backdrop" onClick={closeHandler}>
      <div className={Class.container} style={{left: mouseX, top: mouseY}}>
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
    </div>
  );
}

export default KanjiModal;
