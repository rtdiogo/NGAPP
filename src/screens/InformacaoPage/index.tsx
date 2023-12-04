import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { NavegacaoPrincipalParams } from "../navigation/index";
import { StackNavigationProp } from '@react-navigation/stack';


export default function FormasPage() {
  type navProp = StackNavigationProp<NavegacaoPrincipalParams, "FormasPage">;
  const navigation = useNavigation<navProp>();

  // Função para lidar com o clique em um card
  const handleCardClick = (link: string) => {
    // Aqui você pode navegar para o link desejado usando o navigation.navigate
    // Exemplo: navigation.navigate(link);
    console.log(`Clicou no link: ${link}`);
  };

  // Array com os dados dos cards
  const cardsData = [
    { title: 'Card 1', text: 'Texto do Card 1', link: 'link_para_card_1' },
    { title: 'Card 2', text: 'Texto do Card 2', link: 'link_para_card_2' },
    { title: 'Card 3', text: 'Texto do Card 3', link: 'link_para_card_3' },
    //{ title: 'Card 4', text: 'Texto do Card 4', link: 'link_para_card_4' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.cardTitulo}>
        <Text style={styles.titleHead}>Informações</Text>
      </View>

      {cardsData.map((card, index) => (
        <TouchableOpacity
          key={index}
          style={styles.card}
          onPress={() => handleCardClick(card.link)}
        >
          <Text style={styles.titulo}>{card.title}</Text>
          <Text style={styles.texto}>{card.text}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#34A096',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
  },
  titulo: {
    fontSize: 20,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  texto: {
    fontSize: 16,
    color: '#333',
  },
  cardTitulo: {
    height: 100,
    justifyContent: 'center',
    marginBottom: 50,
    elevation: 1,
    backgroundColor: '#fff',
    borderRadius: 15,
    marginTop: 100,

  },
  titleHead: {
    fontSize: 28,
    textAlign: 'left',
    marginLeft: 40,
    color: '#432C81',
    fontWeight: 'bold',


  },
});
