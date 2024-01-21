import React, { useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, StyleSheet, Alert, Image } from 'react-native';
import { login } from '../../services/api'; // Correct import path

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);
      const response = await login(email, password);

      // Assuming your API returns a token upon successful login
      const token = response.token;

      // Store the token in a secure storage (e.g., AsyncStorage) for future API requests

      // Navigate to the desired screen after login
      navigation.navigate('Dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      Alert.alert('Error', 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Image
      source={require('../../../assets/icons/farmer.png')}
      style={styles.logo}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} disabled={loading} color="#005B41" />
      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>Don't have an account?</Text>
        <Button
          title="Sign Up"
          onPress={() => navigation.navigate('Register')}
          style={styles.switchButton}
          color="#005B41"
        />
      </View>

      {loading && <ActivityIndicator style={styles.loader} size="large" color="#00B9A0" />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor : '#F3EADA',
  },
  logo: {
    width: 80,
    height: 80, 
    marginBottom: 20,
    resizeMode: 'contain',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '100%',
  },
  switchContainer: {
    flexDirection: 'row',
    marginTop: 20,
    alignItems: 'center',
  },
  switchText: {
    marginRight: 10,
    fontSize: 16,
  },
  switchButton: {
    backgroundColor: '#4CAF50',
  },
  loader: {
    marginTop: 20,
  },
});

export default LoginScreen;
