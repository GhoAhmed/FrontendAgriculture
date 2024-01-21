import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const DashboardScreen = ({ navigation }) => {
  const fetchData = () => {
    // Placeholder for fetching data from your API
    console.log('Fetching data...');
    // You can add your API call here
  };

  const navigateToHome = () => {
    // Placeholder for navigating to the Home screen
    navigation.navigate('Home');
  };

  const navigateToNotifications = () => {
    // Placeholder for navigating to the Notifications screen
    navigation.navigate('Notifications');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Dashboard Screen</Text>
      <Button title="Fetch Data" onPress={fetchData} />
      <Button title="Go to Home" onPress={navigateToHome} />
      <Button title="Go to Notifications" onPress={navigateToNotifications} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3EADA', // Third color
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#005B41', // Secondary color
  },
});

export default DashboardScreen;
