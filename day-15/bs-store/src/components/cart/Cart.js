import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';
import { useContext} from 'react';
import AppContext from '../../context/AppContext';
import { Avatar, IconButton } from '@mui/material';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';




export default function Cart() {
  const {carts,setCarts} = useContext(AppContext);
  const cartTotal = carts.reduce((total, { price = 0 }) => total + price, 0);


  const removeFromCart = (item) => {
    setCarts((currentCart) => {
      const indexOfItemToRemove = currentCart.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (indexOfItemToRemove === -1) {
        return currentCart;
      }

      return [
        ...currentCart.slice(0, indexOfItemToRemove),
        ...currentCart.slice(indexOfItemToRemove + 1)
      ];
    });
  };



  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
   


    <Box sx={{ flexGrow: 1, ml: 4, mt:3, width: '100%', maxWidth: 1200}}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <Item>
          <List >
          {
            carts.map((cart,index) => {
          
              return(
                
              <ListItem key = {index} sx={{ bgcolor: 'gainsboro', border : 1, margin:2, borderRadius: 2 }} > 
              <Avatar src={`/books/${cart.id}.jpg`}></Avatar>
                <ListItemText primary={cart.title} sx={{ml:3, rowGap:4}}/>
                <ListItemText primary={cart.price} sx={{}} />
                
              <IconButton onClick={() => removeFromCart(cart)}>
                  <DeleteForeverOutlinedIcon  />
                </IconButton>        
            </ListItem>
          
            )
          })}
  
        </List>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item> <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                Sepet Toplam
                </Typography>
                <Typography variant="body1" color="red">
               {cartTotal}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card></Item>
        </Grid>
        
      </Grid>
    </Box>
   
  );
}
