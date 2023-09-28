// get meaning of each kanji in modal
export default async function kanjiSearch(kanji) {
  try {
    const res = await fetch(`https://kanjiapi.dev/v1/kanji/${kanji}`, {
      method: "GET",
    });
    if (res.ok) {
      const data = await res.json();
      return data.heisig_en;
    } else return false;
  } catch (error) {
    console.error(error);
  }
}
