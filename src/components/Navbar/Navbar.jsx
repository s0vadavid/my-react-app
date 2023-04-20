import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import MessageIcon from '@mui/icons-material/Message';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import PeopleIcon from '@mui/icons-material/People';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SettingsIcon from '@mui/icons-material/Settings';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <AccountBoxIcon sx={{mt: 1.1}}></AccountBoxIcon>
                <NavLink to='/profile'
                    className={navData => navData.isActive ? `${s.item} ${s.active}` : s.item}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <MessageIcon sx={{mt: 1.1}}></MessageIcon>
                <NavLink to='/dialogs'
                    className={navData => navData.isActive ? `${s.item} ${s.active}` : s.item}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NewspaperIcon sx={{mt: 1.1}}></NewspaperIcon>
                <NavLink to='/news'
                    className={navData => navData.isActive ? `${s.item} ${s.active}` : s.item}>News</NavLink>
            </div>
            <div className={s.item}>
                <PeopleIcon sx={{mt: 1.1}}></PeopleIcon>
                <NavLink to="/users"
                    className={navData => navData.isActive ? `${s.item} ${s.active}` : s.item}>Users</NavLink>
            </div>
            <div className={s.item}>
                <LibraryMusicIcon sx={{mt: 1.1}}></LibraryMusicIcon>
                <NavLink to='/music'
                    className={navData => navData.isActive ? `${s.item} ${s.active}` : s.item}>Music</NavLink>
            </div>
            <div className={s.item}>
                <SettingsIcon sx={{mt: 1.1}}></SettingsIcon>
                <NavLink to='/settings'
                    className={navData => navData.isActive ? `${s.item} ${s.active}` : s.item}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;