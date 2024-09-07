import React from 'react';
import { Card, CardMedia, CardContent, Typography, Grid } from '@mui/material';

// Provided image for orders
const orderImage = 'https://cdn.pixabay.com/photo/2021/06/03/01/37/kottu-6305693_960_720.jpg';

// Sample data for orders
const ordersData = [
  {
    title: 'Indian Fast Food',
    description: 'bbbbbbbbbb',
    location: 'india',
    startDate: 'February 14, 2024 12:00 AM',
    endDate: 'February 15, 2024 12:00 AM'
  },
  {
    title: 'Indian Fast Food',
    description: 'Indian Fast Food',
    location: 'india',
    startDate: 'February 15, 2024 12:00 AM',
    endDate: 'February 28, 2024 12:00 AM'
  },
  {
    title: 'food Restaurant',
    description: '50% discount',
    location: 'delhi',
    startDate: 'February 29, 2024 12:00 AM',
    endDate: 'February 29, 2024 06:00 AM'
  }
];

const Orders = () => {
  return (
    <div style={{ padding: '20px' }}>
      <Grid container spacing={2}>
        {ordersData.map((order, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card style={{ backgroundColor: '#000', color: '#fff' }}>
              <CardMedia
                component="img"
                height="140"
                image={orderImage}
                alt={order.title}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {order.title}
                </Typography>
                <Typography variant="body2">
                  {order.description}
                </Typography>
                <Typography variant="body2">
                  {order.location}
                </Typography>
                <Typography style={{ marginTop: '10px' }}>
                  <span style={{ color: 'blue' }}>{order.startDate}</span><br />
                  <span style={{ color: 'red' }}>{order.endDate}</span>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Orders;
