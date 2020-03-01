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
          <Text>Open up App.js to start working on your app!{this.state.data.frase}</Text>
        </View>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
