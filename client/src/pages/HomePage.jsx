import Class from "./HomePage.module.css";
import {useState} from "react";

function HomePage() {
  const [result, setResult] = useState("");
  const [text, setText] = useState("");
  const submitHandler = async (e) => {
    setResult("Pending...");
    e.preventDefault();
    try {
      const res = await fetch(`http://localhost:3000/translate/${text}`, {
        method: "GET",
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
        setResult(data.translation);
      }
    } catch (error) {
      console.error(error);
    }
  };
  const inputHandler = (e) => {
    setText(e.target.value);
  };

  return (
    <div className={Class.container}>
      <form>
        <div>
          <input type="text" onChange={inputHandler} />
          <input type="submit" value="Translate" onClick={submitHandler} />
        </div>
      </form>
      <div>
        <h1>Result</h1>
        <section>{result}</section>
      </div>
    </div>
  );
}

export default HomePage;
