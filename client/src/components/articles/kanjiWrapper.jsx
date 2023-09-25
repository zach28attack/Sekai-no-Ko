import {useState} from "react";
import Class from "./KanjiWrapper.module.css";
import KanjiModal from "./KanjiModal";

// wrap vocab words and names with span element with class and event handler
function kanjiWrapper(props) {
  const [modalActive, setModalActive] = useState(false);
  const kanjiClickHandler = () => {
    setModalActive(!modalActive);
  };

  return (
    <span className={Class.kanji} onClick={kanjiClickHandler}>
      {props.children}
      {modalActive && <KanjiModal kanji={props.children} />}
    </span>
  );
}

export default kanjiWrapper;
