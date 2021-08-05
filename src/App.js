import Footer from "./components/Footer";
import Header from "./components/Header";
import TextPad from "./components/TextPad";
import { useEffect, useState } from "react";

function App() {
    const [notesText, setNotesText] = useState("");
    const [headerStatusText, setHeaderStatusText] = useState("");

    function handleTextChange(e) {
        setNotesText(e.target.value);
        setHeaderStatusText("Text is Unsaved");
    }

    function indicateNotesAreSaved() {
        setHeaderStatusText("Saved Text!");
    }

    useEffect(() => {
        let storedVal = localStorage.getItem("savedNotes");

        setNotesText(storedVal ? storedVal : "Enter Notes Here!");
        setHeaderStatusText("Loaded!");

        console.log(localStorage.getItem("savedNotes"));
    }, []);

    return (
        <div className="flex flex-col w-screen h-screen border-1 border-black">
            <Header statusText={headerStatusText} />
            <div className="h-full block">
                <TextPad onChange={handleTextChange} text={notesText} />
            </div>
            <Footer
                currentText={notesText}
                indicatedSaved={indicateNotesAreSaved}
            />
        </div>
    );
}

export default App;
