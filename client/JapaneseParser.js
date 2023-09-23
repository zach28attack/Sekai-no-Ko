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

// underline and add hover modal to vocab words and names
export default async function JapaneseParser(input) {
  const jpREGEX = /[\u4e00-\u9faf]/; // regex for kanji by Unicode range
  const strArr = input.split(" ");

  strArr.forEach((str) => {
    for (let i = 0; i < str.length; i++) {
      const isKanji = jpREGEX.test(str[i]);
      console.log(str[i], isKanji);
    }
  });
}
// TODO: wrap vocab in span tag with id
