import React, { useState, useEffect } from 'react';
import logoPatologia from '../../assets/pictures/logo-patologia.png';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import api from '../../services/api_service';
import { NavegacaoPrincipalParams } from "../navigation/index";
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { FontAwesome } from '@expo/vector-icons';



export type patologiaItem = {
  id: string,
  titulo: string
}


const PatologiaPage = () => {

  type navProp = StackNavigationProp<NavegacaoPrincipalParams, "PatologiaPage">;
  const navigation = useNavigation<navProp>();

  const [data, setdata] = useState<patologiaItem[]>([]);

  async function getpatologias() {
    try {
      const response = await api.get("patologia");
      setdata(response.data);
    } catch (e) {
      Alert.alert("Error: " + e);
      setdata([]);
    }
  }

  useEffect(() => {
    getpatologias();
  }, []);

  const renderItem = ({ item }: { item: patologiaItem }) => (
    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('DescricaoPage', { id: item.id })}>
      <Text style={{ color: '#432C81', fontSize: 18, }}>{item.titulo} </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
      <FontAwesome name="arrow-left" size={24} color="#432C81" />
    </TouchableOpacity>
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Patologia</Text>
        <Image
          style={styles.imagemLogo}
          source={logoPatologia} />
      </View>
      <FlatList style={styles.cardFlatlist}
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#34A096',
  },
  card: {
    height: 100,
    justifyContent: 'center',
    marginBottom: 50,
    elevation: 1,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginTop: 100,
  },
    
    backButton: {
      position: 'absolute',
      top: 20,
      left: 20,
      zIndex: 1,
    },

  cardFlatlist: {
    marginBottom: 50,
    elevation: 1,
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    padding: 5,
    


  },
  imagemLogo: {
    height: 90,
    width: 90,
    marginLeft: 270,
    position: 'absolute',
  },

  title: {
    fontSize: 28,
    textAlign: 'left',
    marginLeft: 40,
    color: '#432C81',
    fontWeight: 'bold',


  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    margin: 5,
    backgroundColor: '#ffff',
    borderRadius: 15,


  },
});

export default PatologiaPage;
