import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('WelcomePage');
    }, 2000);
  }, []);

  return (
    <View style={styles.container}>
      <Animatable.Text
        animation="zoomIn"
        duration={1500}
        style={styles.text}
      >
        OLÁ
      </Animatable.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 48,
  },
});

export default SplashScreen;
