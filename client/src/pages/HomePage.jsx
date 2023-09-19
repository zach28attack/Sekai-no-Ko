import Class from "./HomePage.module.css";
import {useState} from "react";

function HomePage() {
  const [result, setResult] = useState("");
  const submitHandler = async (e) => {
    setResult("Pending...");
    try {
      e.preventDefault();
      const res = await fetch(`http://localhost:3000/translate/${e.target.value}`, {
        method: "GET",
      });
      if (res.ok) {
        const data = await res.json();
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={Class.container}>
      <form>
        <div>
          <input type="submit" value="世界" onClick={submitHandler} />
        </div>

        <div>
          <input type="submit" value="水" onClick={submitHandler} />
        </div>

        <div>
          <input type="submit" value="雪" onClick={submitHandler} />
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
