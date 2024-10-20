import { useState } from "react";
import "./App.css";
import { Button } from "primereact/button";
function App() {
  const [countClicked, setCountClicked] = useState<number>(0);

  return (
    <>
      <div className="button__container flex flex-column justify-content-center align-items-center">
        <p>кликнуто {countClicked} раз</p>
        <Button
          label="кликни"
          onClick={() => setCountClicked(countClicked + 1)}
        ></Button>
      </div>
    </>
  );
}

export default App;
