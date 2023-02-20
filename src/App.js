import { useState, useRef } from "react";
import text from "./data";

function App() {
  const [lorem, setLorem] = useState([]);
  const inputRef = useRef(null);
  const generate = (e) => {
    e.preventDefault();
    const count =
      inputRef.current.value >= text.length
        ? text.length
        : inputRef.current.value;
    setLorem(text.slice(0, count));
  };
  return (
    <>
      <section className="section-center">
        <h3>tired of boring lorem ipsum?</h3>
        <form className="lorem-form">
          <label htmlFor="amount">paragraphs:</label>
          <input
            type="number"
            name="amount"
            id="amount"
            min={0}
            max={text.length}
            defaultValue={0}
            ref={inputRef}
          />
          <button className="btn" onClick={generate}>
            generate
          </button>
        </form>
        <article className="lorem-text">
          {lorem.map((l, idx) => (
            <p key={idx}>{l}</p>
          ))}
        </article>
      </section>
    </>
  );
}

export default App;
