import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';

import {useForm} from 'react-hook-form';

import Input from '../components/Input';

const Login = props => {
  const submitLogin = () => {
    props.navigation.replace('BottomTabs');
  };

  const {
    control,
    formState: {isValid},
  } = useForm();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>Tour App</Text>

        <View style={styles.textInputsContainer}>
          <Input
            control={control}
            name="username"
            autoComplete="username"
            autoCorrect={false}
            placeholder="Username"
            style={styles.textInput}
            placeholderTextColor="darkgray"
            required={true}
          />

          <Input
            control={control}
            name="password"
            autoComplete="password"
            autoCorrect={false}
            placeholder="Password"
            style={styles.textInput}
            placeholderTextColor="darkgray"
            secureTextEntry
            required={true}
          />
        </View>

        <TouchableOpacity
          onPress={submitLogin}
          disabled={!isValid}
          style={[
            styles.button,
            {
              backgroundColor: isValid ? 'mediumseagreen' : 'dimgray',
            },
          ]}>
          <Text style={styles.buttonLabel}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    padding: 20,
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: 'black',
    fontSize: 36,
    fontWeight: 'bold',
  },
  textInputsContainer: {
    width: '100%',
  },
  textInput: {
    backgroundColor: 'white',
    color: 'black',
    width: '100%',
    padding: 10,
    height: 40,
    borderRadius: 10,
    marginTop: 20,
  },
  button: {
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonLabel: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Login;
