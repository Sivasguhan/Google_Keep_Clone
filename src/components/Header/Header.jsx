import ImageButton from '../UI/ImageButton/ImageButton';
import KeepLogo from '../../../assets/images/keep-logo.jpeg';
import Search from '../../../assets/images/search.jpeg';
import Reload from '../../../assets/images/reload.png';
import Settings from '../../../assets/images/settings.png';
import NineDots from '../../../assets/images/nine-dots.png';
import { VscThreeBars } from 'react-icons/vsc';

export default function Header({ setOpen, searchValue, setSearchValue }) {
    return (
        <header className='header'>
            <section className="header_left">
                <VscThreeBars size={30} onClick={() => setOpen(prev => !prev)} data-testid="menu-icon" />
                <span>
                    <img src={KeepLogo} height={'50px'} />
                    <p>Keep</p>
                </span>
            </section>
            <section className='header_middle'>
                <div>
                    <ImageButton imageUrl={Search} altText={'search-icon'} padding={'5px'} />
                    <input placeholder='Search' value={searchValue} onChange={(e) => setSearchValue(e.target.value)}/>
                </div>
            </section>
            <section className='header_right'>
                <ImageButton imageUrl={Reload} altText={'reload-icon'} />
                <ImageButton imageUrl={Settings} altText={'settings-icon'} />
                <ImageButton imageUrl={NineDots} altText={'ninedots-icon'} />
            </section>
        </header>
    );
}