import React from 'react';
import logomenu from './../../assets/pictures/logo-menupage.png';
import bgmenu from './../../assets/pictures/bg-menupage.png';
import { View, Text, StyleSheet, TouchableOpacity, Image, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RouteProp } from '@react-navigation/native';
import { NavegacaoPrincipalParams } from "../navigation/index";
import { StackNavigationProp } from '@react-navigation/stack';

export interface WelcomePageProps {
  route: RouteProp<NavegacaoPrincipalParams, "MenuPage">
}

export default function MenuPage() {
  type navProp = StackNavigationProp<NavegacaoPrincipalParams, "MenuPage">;
  const navigation = useNavigation<navProp>();

  return (
    <ImageBackground  source={bgmenu} style={{height: '100%', justifyContent: 'center', flex: 1}}>  
    <View style={styles.container}>

      <View style={styles.content}>
        <View style={styles.messageContainer}>
          <Text style={styles.gynecologyMessage}>
                Olá, bem vindo ao  Natural Gynecology! 
          </Text>
        </View>
        <View style={styles.logoContainer}>
          <Image source={logomenu} style={styles.logo}/>
        </View>
      </View>
      <View style={styles.cardContainer}>
        <TouchableOpacity
          style={styles.cardButton} onPress={() => {navigation.navigate('PatologiaPage')}}>
          <Text style={styles.cardButtonText}>Patologias</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.cardButton} onPress={() => {navigation.navigate('InformacaoPage')}}>
          <Text style={styles.cardButtonText}>Informações</Text>
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

  headerText: {
    fontSize: 24,
    color: 'white',
    fontWeight: 'bold',
  },
  content: {
    flex: 1, 
    flexDirection: 'row',
    alignItems: 'center',
  },
  messageContainer: {
    flex: 1, 
    justifyContent: 'center',
    marginLeft: 20,
  },
  logoContainer: {
    flex: 1, 
    alignItems: 'flex-end',
    marginRight: 20,
  },
  logo: {
    width: 150, 
    height: 150,
    marginTop: 120,
  },
  gynecologyMessage: {
    fontSize: 20,
    color: '#fff',
    marginTop: 120,
  },
  cardContainer: {
    flex: 2, 
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 15,
  },
  cardButton: {
    backgroundColor: 'white', 
    width: '90%', 
    padding: 30, 
    borderRadius: 20,
    marginVertical: 20, 
  },
  cardButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

