import React, { useState } from "react";

function TypeHebrew() {
  const [letters, setLetters] = useState("");

  const HebButtons = (event) => {
    const buttonText = event.target.innerText;
    console.log(buttonText);
    setLetters(buttonText);
  };

  console.log(letters);

  return (
    <div>
      <div>
        {letters}
        <button onClick={HebButtons}>ק</button>
        <button onClick={HebButtons}>ר</button>
        <button onClick={HebButtons}>א</button>
        <button onClick={HebButtons}>ט</button>
        <button onClick={HebButtons}>ו</button>
        <button onClick={HebButtons}>ן</button>
        <button onClick={HebButtons}>ם</button>
        <button onClick={HebButtons}>פ</button>
      </div>
      <div>
        <button onClick={HebButtons}>ש</button>
        <button onClick={HebButtons}>ד</button>
        <button onClick={HebButtons}>ג</button>
        <button onClick={HebButtons}>כ</button>
        <button onClick={HebButtons}>ע</button>
        <button onClick={HebButtons}>י</button>
        <button onClick={HebButtons}>ח</button>
        <button onClick={HebButtons}>ל</button>
        <button onClick={HebButtons}>ף</button>
      </div>
      <div>
        <button onClick={HebButtons}>ז</button>
        <button onClick={HebButtons}>ס</button>
        <button onClick={HebButtons}>ב</button>
        <button onClick={HebButtons}>ה</button>
        <button onClick={HebButtons}>נ</button>
        <button onClick={HebButtons}>מ</button>
        <button onClick={HebButtons}>צ</button>
        <button onClick={HebButtons} id="hi">
          ת
        </button>
        <button onClick={HebButtons}>ץ</button>
      </div>
      <div>
        <button onClick={HebButtons}> </button>
      </div>
    </div>
  );
  //   function Save(setLetters) {
  //     const savedLetters = { setLetters };
  //     return console.log(savedLetters);
  //   }
}

// createRoot(document.)

export default TypeHebrew;
