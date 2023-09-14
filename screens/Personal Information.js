import React from 'react';
import {Text, View} from 'react-native';

const PersonalInformation = () => {
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
        Personal Information
      </Text>
    </View>
  );
};

export default PersonalInformation;
