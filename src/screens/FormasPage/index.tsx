import React, { useEffect, useState } from 'react';
import { RouteProp, useNavigation } from '@react-navigation/native';
import { StyleSheet, View, ScrollView, Text, LogBox, Alert, FlatList, TouchableOpacity } from 'react-native';
import { NavegacaoPrincipalParams } from "../navigation/index";
import { StackNavigationProp } from '@react-navigation/stack';
import api from '../../services/api_service';
import { FontAwesome } from '@expo/vector-icons';

export type produtoItem = {
  id: string,
  titulo: string,
  forma_uso: string
}

export interface ProdutoPageProps {
  route: RouteProp<NavegacaoPrincipalParams, "FormasPage">
}

export default function FormasPage(props: ProdutoPageProps) {
  type navProp = StackNavigationProp<NavegacaoPrincipalParams, "FormasPage">;
  const navigation = useNavigation<navProp>();
  const [data, setdata] = useState<produtoItem[]>([]);

  async function getProduto() {
    try {
      const response = await api.get(`produto/${props.route.params.id}`);
      setdata(response.data);
    } catch (e) {
      Alert.alert("Error: " + e);
      setdata([]);
    }
  }

  useEffect(() => {
    getProduto();
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <FontAwesome name="arrow-left" size={24} color="#432C81" />
      </TouchableOpacity>
    <View style={styles.container}>
      <View style={styles.scrollContainer}>
        <View style={styles.card}>
          <Text style={styles.titulo}>FORMAS DE USO</Text>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View>
                <Text style={styles.text}>{`${item.titulo}: ${item.forma_uso}`}</Text>
              </View>
            )}
            style={styles.flatList}
          />
        </View>
      </View>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#34A096',
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    width: 355, 
    maxHeight: 600, 
    overflow: 'scroll', 
  },
  titulo: {
    fontSize: 20,
    textAlign: 'left',
    marginLeft: 10,
    color: '#432C81',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  flatList: {
    width: '100%', 
  },
  text: {
    marginBottom: 15
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 1,
  },
});
