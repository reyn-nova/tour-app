import React from 'react';
import {Text, View} from 'react-native';

const Home = () => {
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
        Home
      </Text>
    </View>
  );
};

export default Home;
