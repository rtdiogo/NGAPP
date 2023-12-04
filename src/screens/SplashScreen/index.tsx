import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import * as Animatable from 'react-native-animatable';
import splashimage from './../../assets/pictures/splashimage.png';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('WelcomePage');
    }, 2000);
  }, []);

  return (
    <View style={[styles.container, { backgroundColor: '#34A096' }]}>
      <Animatable.View
        animation="zoomIn"
        duration={1500}
        style={styles.imageContainer}
      >
        <Image
          source={splashimage} // Substitua pelo caminho da sua imagem
          style={styles.image}
          resizeMode="contain" // Escolha o modo de redimensionamento adequado
        />
      </Animatable.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 400, 
    height: 400, 
  },
});

export default SplashScreen;
