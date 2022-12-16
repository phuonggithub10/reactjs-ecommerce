import React from "react";
import { Grid } from '@material-ui/core';
import Product from "./Product/Product";
import useStyles from './styles'

// const products = [
//     { id: 1, name: 'Shoes', description: 'Running shoes.', price: '$123', image: 'https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg' },
//     { id: 2, name: 'Macbook', description: 'Apple macbook.', price: '$124', image: 'https://www.apple.com/v/macbook-pro-14-and-16/b/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202203300232' },
//     { id: 3, name: 'Phone', description: 'Mobile Galaxy.', price: '$125', image: 'https://t-mobile.scene7.com/is/image/Tmusprod/2683701-FG_Samsung_Galaxy-Z-Fold4_nologo-4?wid=750&hei=750&fmt=png-alpha' }
// ]

const Products = ({ products, onAddToCart }) => {
    const classes = useStyles();

    if (!products.length) return <p>Loading...</p>;

    return (
        <main className={classes.content}>
            <div className={classes.toolbar} />
            <Grid container justifyContent="center" spacing={4}>
                {products.map((product) => (
                    <Grid key={product.id} item xs={12} sm={6} md={4} lg={3}>
                        <Product product={product} onAddToCart={onAddToCart} />
                    </Grid>
                ))}
            </Grid>
        </main>
    );
};

export default Products