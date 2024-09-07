import React from "react";
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import { darkTheme } from './Theme/DarkTheme';
import { Navbar } from './component/Navbar/Navbar';
import Home from './component/Home/Home';
import RestaurantDetails from './component/Restaurant/RestaurantDetails';
import Cart from './component/Cart/Cart'; // Ensure this path is correct
import Profile from "./component/profile/profile";

import CustomerRouter from './Routers/CustomerRouter'; // Corrected file path and name


function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
    {/*<Navbar />*/}
       {/*<Home/>*/}
      {/*<RestaurantDetails/>*/}
      {/*<Cart />*/}
      {/*<Profile/>*/}
      <CustomerRouter/>
    </ThemeProvider>
  );
}

export default App;

