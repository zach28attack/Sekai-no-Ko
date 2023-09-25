// get meaning of each kanji in modal
const kanjiSearch = async (kanji) => {
  console.log("kanji:", kanji);
  const res = await fetch(`https://kanjiapi.dev/v1/kanji/${kanji}`, {
    method: "GET",
  });
  if (res.ok) {
    const data = await res.json();
    console.log("kanji:", kanji, "meaning:", data.heisig_en);
  }
};

// wrap vocab words and names with span element with class and event handler
export default function KanjiParser(input) {
  const jpREGEX = /[\u4e00-\u9faf]/; // regex for kanji by Unicode range
  const strArr = input.split("");

  // iterate through string and add modal event listener to words/names (strings of kanji)
  let word = "";
  const wrappedKanji = strArr.map((str, index) => {
    const isKanji = jpREGEX.test(str);
    // console.log(str, isKanji);
    if (isKanji === true) word = `${word}${str}`;
    else if (word.length > 0) {
      // wrap word and insert into string
      const wordWithNonKanji = `<span class={Class.title}>${word}</span>${str}`;
      // console.log(wordWithNonKanji);s
      word = "";
      return wordWithNonKanji;
    } else {
      return str;
    }
  });
  return wrappedKanji.join("");
}
