import React from 'react';
import bgwelcome from './../../assets/pictures/bg-welcome2.png';
import logowelcome from './../../assets/pictures/logo-welcome.png';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, Image, TouchableOpacity, Text, ImageBackground, LogBox } from 'react-native';
import { NavegacaoPrincipalParams } from "../navigation/index";
import { StackNavigationProp } from '@react-navigation/stack';


export default function WelcomePage() {
  type navProp = StackNavigationProp<NavegacaoPrincipalParams, "WelcomePage">;
  const navigation = useNavigation<navProp>();
  LogBox.ignoreLogs(['Sending']);

  return (
    <ImageBackground  source={bgwelcome} style={{height: '100%', justifyContent: 'center', flex: 1}}>  
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <Image source={logowelcome} style={styles.logo} />
      </View>
      
      <View style={styles.content}>
        <Text style={styles.titulo}>NATURAL GYNECOLOGY</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={()=>navigation.navigate('MenuPage')}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ImageBackground>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: '#7B9973',
  },
  logoContainer: {
    flex: 2, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 3, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 26,
    color: '#Fff',
    fontWeight: 'bold',
  },
  logo: {
    width: 200,
    height: 200,
    //borderRadius: 20,
    marginTop: 100,
    
  },
  buttonsContainer: {
    flex: 1,
    flexDirection: 'row',
    marginHorizontal: 30,
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: '#34A096',
    width: '50%',
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  }
});


