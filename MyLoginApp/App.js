import * as React from 'react';
import { View, StyleSheet } from 'react-native';

import AppHeader from './src/components/AppHeader';
import AppFooter from './src/components/AppFooter';
import LoginScreen from './src/components/LoginScreen';
// import WelcomeScreen from './src/components/WelcomeScreen';

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <AppHeader />
        <LoginScreen />
        {/* Pour tester l'écran d'accueil : remplacer LoginScreen par <WelcomeScreen /> */}
      </View>
      <View style={styles.footerContainer}>
        <AppFooter />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333333',
  },
  footerContainer: {
    backgroundColor: '#333333',
  },
});
