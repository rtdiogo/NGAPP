import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import { NavegacaoPrincipalParams } from "../navigation/index";
import { StackNavigationProp } from '@react-navigation/stack';


export default function FormasPage() {
  type navProp = StackNavigationProp<NavegacaoPrincipalParams, "FormasPage">;
  const navigation = useNavigation<navProp>();

  const handleCardClick = (link: string) => {
    console.log(`Clicou no link: ${link}`);
  };

  const cardsData = [
    { title: 'PINHEIRO, P. CAMPOS, F. Cólica Menstrual: causas, sintomas e tratamento. MD. Saúde', text: 'Saiba mais', link: 'https://www.mdsaude.com/ginecologia/menstruacao/colica-menstrual/' },
    { title: 'R, A. N.; RAFIQ, N. B. IN: STATPEARLS [INTERNET]. TREASURE ISLAND (FL): STATPEARLS PUBLISHING', text: 'Saiba mais', link: 'https://www.mulheres.org.br/wp-content/uploads/2020/07/protocolo-candidiase.pdf' },
    { title: 'ZARDETO, J. et al. Uso de plantas medicinais e fitoterápicos na candidíase. Universidade Paranaense- UNIPAR, Umuarama/PR, 2022. ', text: 'Saiba mais', link: 'https://www.researchgate.net/profile/O-Alberton/publication/364380895_Uso_de_plantas_medicinais_e_Fitoterapicos_na_candidiase/links/63504a2a96e83c26eb37dca6/Uso-de-plantas-medicinais-e-Fitoterapicos-na-candidiase.pdf' },
    
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.cardTitulo}>
        <Text style={styles.titleHead}>Referências</Text>
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
