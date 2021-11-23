import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


export default function App() {

  const [peso, setPeso] = useState(null);
  const [altura, setAltura] = useState(null);
  const [imc, setImc] = useState('0.00');
  const [legenda, setLegenda] = useState('');


  function calcularIMC() {
    const resultado = (peso / (altura * altura).toFixed(2));
    setImc(Math.ceil(resultado)
    );


    if (resultado < 18.5) {
      setLegenda('Magreza',
      );
    } else if (resultado >= 18.5 && resultado < 25) {
      setLegenda('Normal',
      );
    } else if (resultado >= 25 && resultado < 30) {
      setLegenda('Sobrepeso',
      );
    } else if (resultado >= 30 && resultado < 40) {
      setLegenda('Obesidade',
      );
    } else if (resultado >= 40) {
      setLegenda('Obesidade Grave',
      );
    }
  }


  return (
    <View style={styles.container}>
      <Text style={styles.Title}> Calculadora de IMC</Text>

      <TextInput
        style={styles.Peso}
        onChangeText={setPeso}
        value={peso}
        placeholder="Insira seu Peso. (Ex. 62.5)"
        keyboardType="numeric"
      />

      <TextInput
        style={styles.Altura}
        onChangeText={setAltura}
        value={altura}
        placeholder="Insira sua Altura. (Ex. 1.65)"
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={styles.Calculator}
        activeOpacity={.5}
        onPress={() => calcularIMC()}>
        <Text style={styles.txtCalculator}> Calcular </Text>
      </TouchableOpacity>

      <Text style={styles.TitleResultado}> Seu IMC é: </Text>
      <Text style={styles.Resultado}> {imc} </Text>
      <Text style={styles.Legenda}> {legenda} </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  Title: {
    fontSize: 30,
    fontWeight: 'bold',
  },

  Peso: {
    marginTop: 30,
    borderBottomWidth: 1,
    padding: 10,
    borderWidth: 1,
    height: 60,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Altura: {
    marginTop: 20,
    borderBottomWidth: 1,
    padding: 10,
    borderWidth: 1,
    height: 60,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },

  Calculator: {
    marginTop: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'green',
    borderRadius: 20,
    borderWidth: 2,
    width: 160,
    height: 50,
    borderColor: 'green'
  },

  txtCalculator: {
    fontSize: 20,
    textAlign: 'center',
    color: 'white',
  },

  TitleResultado: {
    fontSize: 20,
    marginTop: 30,
  },

  Resultado: {
    fontSize: 50,
  },

  Legenda: {
    fontSize: 30,
  }
});
