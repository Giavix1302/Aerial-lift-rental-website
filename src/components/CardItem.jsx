import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Category } from '@mui/icons-material';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';


export default function CardItem({ item }) {
  const navigate = useNavigate();

  console.log('location:', location);
  return (
    <Card sx={{ height: '100%', cursor: 'pointer' }}>
      <CardMedia
        sx={{ height: 240 }}
        image={item.image}
        title={item.name}
      />
      <CardContent sx={{ height: '180px', '&:last-child': { pb: '16px' }, display: 'flex', flexDirection: 'column' }}>
        <Typography gutterBottom variant="h5" component="div" sx={{
          display: '-webkit-box',
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          WebkitLineClamp: 2,
          fontWeight: 'bold',
        }}>
          {item.name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', }}>
          {item.category}
        </Typography>
        <Box sx={{ mt: 'auto', display: 'flex', justifyContent: 'flex-start', gap: 2 }}>
          <Button variant='contained' sx={{ color: 'white' }}>Liên hệ</Button>
          <Button onClick={() => navigate(`/item/${item.id}`, {state: {item}})} variant='contained' sx={{ color: 'white' }}>Xem chi tiết</Button>
        </Box>
      </CardContent>
    </Card>
  );
}
