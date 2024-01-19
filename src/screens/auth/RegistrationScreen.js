import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert } from 'react-native';
import { register } from '../../services/api';

const RegistrationScreen = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSignup = async () => {
    try {
      const response = await register(name, email, password);

      // Assuming your API returns a token upon successful signup
      const token = response.token;

      // Store the token in a secure storage (e.g., AsyncStorage) for future API requests

      // Navigate to the desired screen after signup
      navigation.navigate('Dashboard');
    } catch (error) {
      console.error('Signup failed:', error);
      Alert.alert('Error', 'Signup failed. Please try again.');
    }
  };

  return (
    <View>
      <Text>Signup Screen</Text>
      <TextInput
        placeholder="Name"
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        placeholder="Confirm Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />
      <Button title="Sign Up" onPress={handleSignup} />
      <Button
        title="Already have an account? Login"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
};

export default RegistrationScreen;
