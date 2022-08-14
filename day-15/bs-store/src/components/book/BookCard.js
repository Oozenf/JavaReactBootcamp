import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Cart from "../cart/Cart"
import { useNavigate } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import { useContext } from 'react';

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function BookCard({book}) {
  const [expanded, setExpanded] = React.useState(false);
  const {carts, setCarts} = useContext(AppContext);
  const navigate = useNavigate();
  

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const goToCart = (books) => {
        
   setCarts([...carts, books]);

  }

    


  

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={book.title}
        subheader={book.publisher}
        sx={{minHeight: 80}}
      />
      <CardMedia
        component="img"
        height="194"
        image={`/books/${book.id%120}.jpg`}
        alt="Paella dish"
        sx={{ objectFit: "contain" }}
      />
      <CardContent sx={{minHeight: 80}} align="center">
      {book.bookAuthors.map((authors,index) => {
          return (
            <Typography key = {index} variant="body2" color="text.secondary" align="center" justifySelf={"center"}>
              {authors.firstName} {authors.lastName}
            </Typography>
          );
        })}
        <IconButton color="primary" aria-label="add to cart" onClick={() => goToCart(book)}>
         
          <AddShoppingCartIcon fontSize='large'/>
        </IconButton>
      </CardContent>
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Typography paragraph>{book.category.categoryName}</Typography>
          <Typography paragraph>{book.category.description}</Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
