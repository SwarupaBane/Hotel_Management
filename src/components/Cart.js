import { useState } from "react";
import '../css/Cart.css'
//import sauth from "./images/sauthThali.jpg";
import biryani from '../images/biryani.jpg';
import bread from "../images/bread.jpg";
import burger from "../images/burger.jpg";
import chickenfries from "../images/chickenfries.jpg";
import coffee from "../images/coffee.jpg";
import milkshake from "../images/milkshake.jpg";
import pasta from "../images/pasta.jpg";
import pavbhaji from "../images/pavbhaji.jpg";
import pizza from "../images/pizza.jpg";
import rolls from "../images/rolls.jpg";
import IceCream from "../images/IceCream.jpg";
import donut1 from "../images/donut1.jpg";
import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Grid,
  Box,
  List,
  ListItem,
  ListItemText,
  Divider,
  Paper,
} from "@mui/material";

import CartPage from "./CartPage";
import Layout from "./Layout";


// import Menu from './Menu';

const initialProducts = [
  {
    id: 4,
    name: "biryani",
    price: 399,
    description: "Special-Sauth",
    image:biryani
  },
  {
    id: 6,
    name: "Bread",
    price: 499,
    description: "Biggest Thali",
    image: bread,
  },
  {
    
    id: 1,
    name: "Burger",
    price: 190,
    description: "fvdbdb",
    image: burger,
  },
  {
    
    id: 2,
    name: "Chicken Fries",
    price: 299,
    description: "bjhbkj",
    image: chickenfries,
  },
  {
    id: 3,
    name: "Coffee",
    price: 270,
    description: "Indian Food",
    image: coffee,
  },
  {
    
    id: 12,
    name: "Milk Shake",
    price: 299,
    description: "Latest model smartphone",
    image: milkshake,
  },

  {
    id: 5,
    name: "Pasta",
    price: 125,
    description: "Special Paneer",
    image: pasta,
  },
  
  {
    id: 7,
    name: "PavBhaji",
    price: 289,
    description: "Special-Malavani",
    image: pavbhaji,
  },
  {
    id: 8,
    name: "Pizza",
    price: 280,
    description: "Special-Gujarati",
    image: pizza,
  },
  {
    
    id: 9,
    name: "Rolls",
    price: 299,
    description: "Marathi thali ",
    image: rolls,
  },
  {
    
    id: 10,
    name: "Ice-Cream",
    price: 299,
    description: "Latest model smartphone",
    image: IceCream,
  },
  {
    id: 11,
    name: "Donut",
    price: 110,
    description: "Special-Biryani",
    image: donut1,
  },
  
  // Add more products as needed
];

const ProductCard = ({ product, onAdd }) => (
  <Card raised>
    <CardMedia
      component="img"
      height="140"
      image={product.image}
      alt={product.name}
    />
    <CardContent>
      <Typography gutterBottom variant="h6" component="div">
        {product.name}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {product.description}
      </Typography>
      <Typography variant="body1">INR : {product.price.toFixed(2)}</Typography>
    </CardContent>
    <CardActions>
      <Button size="small" variant="contained" onClick={() => onAdd(product)}>
        Add to Cart
      </Button>
    </CardActions>
  </Card>
);

    const buynow = (e) => {
      //e.preventDefault();
      alert('Order Placed Successfull !');
      window.location.reload();
    }

const ShoppingCartOverview = ({ cartItems }) => (
  <Paper elevation={3} sx={{ p: 2 }}>
    <Typography variant="h6" gutterBottom>
      Shopping Cart
    </Typography>
    <Divider />
    <List>
      {cartItems.map((item, index) => (
        <ListItem key={index} divider>
          {/* <ListItemText
            primary={item.name}
            secondary={Quantity: ${item.quantity}}
          /> */}
          <Typography variant="body2">
            INR : {(item.price * item.quantity).toFixed(2)}
          </Typography>
        </ListItem>
      ))}
    </List>
    <Typography variant="h6">
      Total : INR : 
      {cartItems
        .reduce((total, item) => total + item.price * item.quantity, 0)
        .toFixed(2)}
    <button className="btn btn-primary" onClick={buynow}>Buy Now</button>

    </Typography>
  </Paper>
);

const Cart = () => {
  const [products] = useState(initialProducts);
  const [cart, setCart] = useState([]);

  const handleAddToCart = (productToAdd) => {
    setCart((prevCart) => {
      const productExists = prevCart.find(
        (item) => item.id === productToAdd.id
      );
      if (productExists) {
        return prevCart.map((item) =>
          item.id === productToAdd.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...productToAdd, quantity: 1 }];
    });
  };

  return (
    <div className="ca">
    <Layout>
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Grid container spacing={2}>
            {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <ProductCard product={product} onAdd={handleAddToCart} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item xs={12} md={4}>
          <ShoppingCartOverview cartItems={cart} />
          <CartPage cartItems={cart} />
        </Grid>
        
      </Grid>
    </Box>
    </Layout>
    </div>

  );
};

export default Cart