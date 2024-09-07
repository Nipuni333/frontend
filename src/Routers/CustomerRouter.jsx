import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Orders from './Orders'; // Import the Orders component
import Profile from './Profile'; // Import the Profile component
import Favorites from './Favorites'; // You can create a Favorites component similarly
import Address from './Address'; // You can create an Address component similarly
import Payments from './Payments'; // You can create a Payments component similarly
import Notification from './Notification'; // You can create a Notification component similarly
import Events from './Events'; // You can create an Events component similarly
import Logout from './Logout'; // You can create a Logout component similarly
import ProfileNavigation from './ProfileNavigation'; // Import the ProfileNavigation for dropdown


const CustomerRouter = () => {
  return (
    <Router>
      <div>
        {/* Profile Navigation (Dropdown when you click P icon) */}
        <ProfileNavigation />
        
        {/* Routing setup */}
        <Routes>
          <Route path="/" element={<Profile />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/address" element={<Address />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/events" element={<Events />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
    </Router>
  );
};

export default CustomerRouter;
