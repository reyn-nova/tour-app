import React from 'react';
import {Text, View} from 'react-native';

const MyOrders = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
      }}>
      <Text
        style={{
          fontSize: 28,
          fontWeight: 'bold',
        }}>
        My Orders
      </Text>
    </View>
  );
};

export default MyOrders;
