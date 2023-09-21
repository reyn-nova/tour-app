import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

import Login from './screens/Login';
import BottomTabs from './screens/BottomTabs';
import DestinationDetail from './screens/DestinationDetail';
import OrderSuccess from './screens/OrderSuccess';
import PersonalInformation from './screens/Personal Information';

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          header: () => null,
        }}
        initialRouteName="Login">
        <Stack.Screen name="BottomTabs" component={BottomTabs} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="DestinationDetail" component={DestinationDetail} />
        <Stack.Screen name="OrderSuccess" component={OrderSuccess} />
        <Stack.Screen
          name="PersonalInformation"
          component={PersonalInformation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
