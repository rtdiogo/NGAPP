import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert, Image } from 'react-native';
import logoPatologia from '../../assets/pictures/logo-patologia.png';
import api from '../../services/api_service';
import { RouteProp } from '@react-navigation/native';
import { NavegacaoPrincipalParams } from "../navigation/index";
import { StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

export type patologiaItem = {
  descricao: string,
  sintomas: string,
  titulo: string,
  produtos: any[] | any,
}

export interface DescricaoPageProps {
  route: RouteProp<NavegacaoPrincipalParams, "DescricaoPage">
}


export default function DescricaoPage(props: DescricaoPageProps) {
  type navProp = StackNavigationProp<NavegacaoPrincipalParams, "DescricaoPage">;
  const navigation = useNavigation<navProp>();

  const [data, setdata] = useState<patologiaItem[]>([]);

  async function getpatologia() {
    try {

      const response = await api.get(`patologia/${props.route.params.id}`);
      setdata(response.data);
    } catch (e) {
      Alert.alert("Error: " + e);
      setdata([]);
    }
  }

  useEffect(() => {
    getpatologia();
  }, []);

  if (data instanceof Array) {
    data.map((val, idx, []) => { });
}

  return (

    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{data?.titulo}</Text>
        <Image style={styles.imagemLogo} source={logoPatologia} />
      </View>

      <View style={styles.cardInfo}>
        <View style={styles.cardDescricao}>
          <Text style={styles.textoInfo}>O QUE É?</Text>
          <Text style={styles.textoBase}>{data?.descricao}</Text>
          <Text style={styles.textoInfo}>SINAIS E SINTOMAS</Text>
          <Text style={styles.textoBase}>{data?.sintomas}</Text>
          <Text style={styles.textoInfo}>PRODUTOS NATURAIS</Text>
          {/* {data?.produtos.map((item) => (
            <Text key={item.id} style={styles.textoProduto}>{`\u25CF ${item.titulo}`}</Text>
          ))} */}
        </View>
        <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('MenuPage')}>
            <Text style={styles.buttonText}>Formas de uso</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>

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
  cardInfo: {
    marginBottom: 50,
    elevation: 1,
    backgroundColor: '#D9D9D9',
    borderRadius: 15,
    padding: 5,
  },
  cardDescricao: {
    marginBottom: 15,
    elevation: 1,
    backgroundColor: '#ffff',
    borderRadius: 15,
    padding: 5,
  },
  buttonsContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
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
  },
  textoInfo: {
    fontSize: 15,
    textAlign: 'left',
    marginLeft: 10,
    color: '#432C81',
    fontWeight: 'bold',
  },
  textoBase: {
    textAlign: 'left',
    marginLeft: 10,
    marginBottom: 15,
    marginTop: 5,
  },
  textoProduto:{
    textAlign: 'left',
    marginLeft: 10,
  },
});
