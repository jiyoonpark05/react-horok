import Header from "./components/Layout/Header";
import Note from "./components/Note/Note";
import Coffees from "./components/Coffees/Coffees";
import { useState } from "react";

function App() {
  const [NoteIsShown, setNoteIsShown] = useState(false);

  const showNoteHandler = () => {
    setNoteIsShown(true);
  };

  const hideNoteHandler = () => {
    setNoteIsShown(false);
  };
  return (
    <div className="App">
      {NoteIsShown && <Note onClose={hideNoteHandler} />}
      <Header onShowNote={showNoteHandler} />
      <Coffees />
    </div>
  );
}

export default App;
