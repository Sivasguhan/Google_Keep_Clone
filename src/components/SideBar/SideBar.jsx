import ImageButton from '../UI/ImageButton/ImageButton'
import Reload from '../../../assets/images/reload.png'
import Notes from '../../../assets/images/notes.jpeg'
import Remainder from '../../../assets/images/remainder.png'
import EditLabel from '../../../assets/images/editlabel.png'
import Archive from '../../../assets/images/archive.png'
import Trash from '../../../assets/images/trash.png'
import { useState } from 'react'

export default function SideBar({ open }) {

    const [isHovering, setIsHovering] = useState(false)

    const shouldOpen = open || isHovering;

    return (
        <nav
            className={open ? 'sidebar navOpenStyle' : 'sidebar'}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div>
                <ImageButton imageUrl={Notes} />
                {shouldOpen && <span>Notes</span>}
            </div>
            <div>
                <ImageButton imageUrl={Remainder} />
                {shouldOpen && <span>Remainder</span>}
            </div>
            <div>
                <ImageButton imageUrl={EditLabel} />
                {shouldOpen && <span>Edit Labels</span>}
            </div>
            <div>
                <ImageButton imageUrl={Archive} />
                {shouldOpen && <span>Archive</span>}
            </div>
            <div>
                <ImageButton imageUrl={Trash} />
                {shouldOpen && <span>Trash</span>}
            </div>
        </nav>
    )
}