import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

const Login = props => {
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
        Login
      </Text>

      <TouchableOpacity
        onPress={() => props.navigation.replace('BottomTabs')}
        style={{
          backgroundColor: 'teal',
          borderRadius: 10,
          marginTop: 20,
          paddingHorizontal: 20,
          paddingVertical: 10,
        }}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: 20,
          }}>
          Go To Bottom Tabs
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
