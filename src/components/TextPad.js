function TextPad({ onChange, text }) {
    function updateTextState(e) {
        onChange(e);
    }

    return (
        <textarea
            onChange={updateTextState}
            className="w-full h-full p-5 rounded-sm bg-yellow-300 resize-none"
            value={text}
        ></textarea>
    );
}

export default TextPad;
