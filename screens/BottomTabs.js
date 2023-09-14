import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './Home';
import MyOrders from './MyOrders';

const ReactNavigationBottomTabs = createBottomTabNavigator();

const BottomTabs = () => {
  return (
    <ReactNavigationBottomTabs.Navigator>
      <ReactNavigationBottomTabs.Screen name="Home" component={Home} />

      <ReactNavigationBottomTabs.Screen name="MyOrders" component={MyOrders} />
    </ReactNavigationBottomTabs.Navigator>
  );
};

export default BottomTabs;
// DestinationDetail, OrderSuccess, PersonalInformation
