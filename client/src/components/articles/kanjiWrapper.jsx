import Class from "./KanjiWrapper.module.css";
import {useState} from "react";
import KanjiModal from "./KanjiModal";
import ReactDOM from "react-dom";

// wrap vocab words and names with span element with class and event handler
function kanjiWrapper(props) {
  const [modalActive, setModalActive] = useState(false);
  const [mouseX, setMouseX] = useState();
  const [mouseY, setMouseY] = useState();

  const kanjiClickHandler = (e) => {
    setModalActive(!modalActive);
    setMouseX(e.clientX);
    setMouseY(e.clientY);
  };

  return (
    <>
      <span className={Class.kanji} onClick={kanjiClickHandler}>
        {props.children}
      </span>
      {modalActive &&
        ReactDOM.createPortal(
          <KanjiModal kanji={props.children} setModalActive={setModalActive} mouseX={mouseX} mouseY={mouseY} />,
          document.getElementById("modalTarget")
        )}
    </>
  );
}

export default kanjiWrapper;
