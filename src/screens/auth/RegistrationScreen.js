import React, { useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, StyleSheet, Alert, Image } from 'react-native';
import { register } from '../../services/api';

const RegistrationScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSignup = async () => {
    try {
      setLoading(true);
      const response = await register(name, email, password);

      // Assuming your API returns a token upon successful signup
      const token = response.token;

      // Store the token in a secure storage (e.g., AsyncStorage) for future API requests

      // Navigate to the desired screen after signup
      navigation.navigate('Dashboard');
    } catch (error) {
      Alert.alert('Error', 'Signup failed. Please try again.');
    }finally {
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
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
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
      <TextInput
        style={styles.input}
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Button title="Sign Up" onPress={handleSignup} disabled={loading} color="#005B41" />
      <View style={styles.switchContainer}>
        <Text style={styles.switchText}>Already have an account?</Text>
        <Button
          title="Sign In"
          onPress={() => navigation.navigate('Login')}
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

export default RegistrationScreen;
