function Footer({ currentText, indicatedSaved }) {
    function saveText() {
        localStorage.setItem("savedNotes", currentText);
        indicatedSaved();
    }

    return (
        <div className="w-screen rounded-sm bg-yellow-600">
            <button
                className="w-full text-center p-5 text-xl font-bold"
                onClick={saveText}
            >
                Save Notes
            </button>
        </div>
    );
}

export default Footer;
