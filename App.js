import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      data: []
    }
  }
  
  UNSAFE_componentWillMount(){
     this.getPhrasesFromApiAsync();
  }

  getPhrasesFromApiAsync() {
    return fetch('https://allugofrases.herokuapp.com/fraseAleatoria')
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          data : responseJson
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render(){
      return (
        <View style={styles.container}>
          <View style={styles.content}>

            <View style={styles.boxFrase}>
              <Text style={styles.frase}>{this.state.data.frase}</Text>
            </View>
            
            <Text style={styles.subTitulo}>Autor: {this.state.data.autor}   |  Livro: {this.state.data.livro}</Text>
            
            <View style={styles.boxCreditos}>
              <Text style={styles.subTitulo}>•  Desenvolvido por Rayssa Costa</Text>
              <Text style={styles.subTitulo}>•  API Allugo Frases</Text>
            </View>

          </View>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF9C4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    margin: 20,
  },
  boxFrase: {
    padding: 20,
    margin: 10,
    borderRadius: 10,
    backgroundColor: '#FBC02D',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  boxCreditos: {
    alignItems: "flex-end",
    margin:20
  },
  frase: {
    fontSize: 25,
    color: '#FFFFFF',
    textAlign: "justify",
  },
  subTitulo: {
    fontSize: 10,
    color: '#FBC02D',
    textAlign: "center",
  },
});
