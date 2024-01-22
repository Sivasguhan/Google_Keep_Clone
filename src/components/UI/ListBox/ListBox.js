import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { notesActions } from "../../../store";
import { useEffect, useState } from "react";

export default function ListBox({ id }) {
    const dispatch = useDispatch()
    const notes = useSelector(state => state.notes)
    const currentNote = notes.filter(note => note.id === id)[0]
    const [cleanUp, setCleanUp] = useState(false)

    const handleDelete = () => {
        setCleanUp(true)
        setTimeout(()=>{
            dispatch(notesActions.deleteNote(id))
        },500)
    }


    const handleTitleChange = (e) => {
        dispatch(notesActions.editNote(
            {
                id: id,
                name: "title",
                value: e.target.value
            }
        ))
    }

    const handleDescriptionChange = (e) => {
        dispatch(notesActions.editNote(
            {
                id: id,
                name: "description",
                value: e.target.value
            }
        ))
    }

    return (
        <div className={cleanUp ? "listbox remove" : "listbox"} >
            <span>
                <input
                    spellCheck="false"
                    placeholder="Title...."
                    value={currentNote.title}
                    onChange={handleTitleChange}
                />
                <RiDeleteBin6Line onClick={handleDelete} />
            </span>
            <p contentEditable placeholder="Description..." onInput={handleDescriptionChange}>
                {currentNote.description}
            </p>
        </div>
    )
}