import React from 'react';
import {Text, View} from 'react-native';

const OrderSuccess = () => {
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
        Order Success
      </Text>
    </View>
  );
};

export default OrderSuccess;
