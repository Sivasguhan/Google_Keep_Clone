import { useState } from "react";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";
import TitleInput from "./components/TitleInput/TitleInput";
import ListBox from "./components/UI/ListBox/ListBox";
import { useDispatch, useSelector } from "react-redux";
import { notesActions } from "./store";
import { v4 } from "uuid";

export default function App() {

    const [menuIsOpened, setMenuIsOpened] = useState(false)
    const [searchValue, setSearchValue] = useState('')
    const [title, setTitle] = useState('')
    const dispatch = useDispatch();
    const notes = useSelector(state => state.notes)
    const filteredNotes = notes.filter(note => note.title.includes(searchValue))

    const handleChangeTitle = (e) => {
        setTitle(e.target.value);
    }

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && title.length > 0) {
            const id = v4();
            dispatch(notesActions.addNote({ id: id, title: title, description: "" }))
            setTitle('')
        }
    }

    return (
        <>
            <Header
                setOpen={setMenuIsOpened}
                searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            <div className="main-content">
                <SideBar open={menuIsOpened} />
                <section className="list-content">
                    <TitleInput
                        title={title}
                        handleChangeTitle={handleChangeTitle}
                        handleKeyPress={handleKeyPress}
                    />
                    {filteredNotes.length === 0 && <p className="no-notes">Notes you add appear here</p>}
                    {filteredNotes.length !== 0 && <div className="notes-content">
                        {filteredNotes.map((note) =>
                            <ListBox
                                key={note.id}
                                id={note.id}
                            />
                        )}
                    </div>
                    }
                </section>
            </div>
        </>
    )
}