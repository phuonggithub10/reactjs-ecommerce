import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import logo from '../../assets/commerce.png';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ totalItems }) => {
    const classes = useStyles;
    const location = useLocation();
    return (
        <AppBar position="fixed" className={classes.appBar} color='inherit'>
            <Toolbar>
                <Typography component={Link} to="/" variant='h6' className={classes.appBar} color='inherit'>
                    <img src={logo} alt='123' height='25px' className={classes.image} />
                </Typography>
                <div className={classes.grow}></div>
                {location.pathname == '/' && (
                <div className={classes.button}>
                    <IconButton component={Link} to="/cart" aria-label='Show cart items' color='inherit'>
                        <Badge overlap="rectangular" badgeContent={totalItems} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>)}
            </Toolbar>
        </AppBar>
    )
}

export default Navbar