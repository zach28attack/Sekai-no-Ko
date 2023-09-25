export default async function gTranslate(kanji) {
  try {
    const res = await fetch(`http://localhost:3000/translate/${kanji}`, {
      method: "GET",
    });
    if (res.ok) {
      const data = await res.json();
      return data.translation;
    } else return false;
  } catch (error) {
    console.error(error);
  }
}
