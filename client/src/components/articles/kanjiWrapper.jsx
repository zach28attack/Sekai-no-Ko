import Class from "./KanjiWrapper.module.css";

// wrap vocab words and names with span element with class and event handler
function kanjiWrapper(props) {
  return <span className={Class.kanji}>{props.children}</span>;
}

export default kanjiWrapper;
