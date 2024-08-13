import FontSelector from "./components/FontSelector";
import Note from "./components/Note";
import "./styles.css";
// 1. import useLocalStorageState
import useLocalStorageState from "use-local-storage-state";

// Challenge:
// The contents of this notepad are lost when you refresh the page.
// Make it persistent by saving the contents to local storage.

export default function App() {
  // 2. replace both useState hooks with useLocalStorageState hooks
  // const [note, setNote] = useState("");
  // const [font, setFont] = useState("system-ui");
  const [note, setNote] = useLocalStorageState("note", { defaultValue: "" });
  const [font, setFont] = useLocalStorageState("font", {
    defaultValue: "system-ui",
  });
  // Anm. Jessica: bei Lösungzweites Argumentals Objekt
  // system-ui is the font-family, see StyleSheet.css

  function handleNoteChange(newNote) {
    setNote(newNote);
  }

  function handleFontChange(newFont) {
    setFont(newFont);
  }

  return (
    <div className="app" style={{ "--font": font }}>
      <FontSelector font={font} onFontChange={handleFontChange} />
      <Note note={note} onNoteChange={handleNoteChange} />
    </div>
  );
}
