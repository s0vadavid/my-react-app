import { AppBar, IconButton, Toolbar } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return <AppBar sx={{
        backgroundColor: 'indigo'
      }}>
        <Toolbar>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/profile/"
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                Social
            </Typography>
        </Toolbar>
    </AppBar>
}

export default Header;