export default function TitleInput({ title, handleChangeTitle, handleKeyPress }) {
    return (
        <input
            placeholder="Enter a title"
            className="title-input"
            spellCheck="false"
            value={title}
            onChange={handleChangeTitle}
            onKeyDown={handleKeyPress}
        />
    );
}