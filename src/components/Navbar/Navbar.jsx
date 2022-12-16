import React from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import useStyles from './styles';
import logo from '../../assets/commerce.png';


const Navbar = () => {
    const classes = useStyles;
    return (
        <AppBar position="fixed" className={classes.appBar} color='inherit'>
            <Toolbar>
                <Typography variant='h6' className={classes.appBar} color='inherit'>
                    <img src={logo} alt='123' height='25px' className={classes.image} />
                </Typography>
                <div className={classes.grow}></div>
                <div className={classes.button}>
                    <IconButton aria-label='Show cart items' color='inherit'>
                        <Badge overlap="rectangular" badgeContent={2} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar