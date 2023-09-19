import Class from "./HomePage.module.css";
import {useState} from "react";

function HomePage() {
  const [result, setResult] = useState("");
  const submitHandler = async (e) => {
    e.preventDefault();
    const translation = await fetch(``);
    // console.log(e.target.value);
  };

  return (
    <div>
      <form>
        <label>世界</label>
        <input type="submit" value="世界" onClick={submitHandler} />

        <label>水</label>
        <input type="submit" value="水" onClick={submitHandler} />

        <label>雪</label>
        <input type="submit" value="雪" onClick={submitHandler} />
      </form>
      <div>
        <h1>Result</h1>
        <section>{result}</section>
      </div>
    </div>
  );
}

export default HomePage;
