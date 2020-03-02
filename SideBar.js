import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class SideBar extends Component {
    render(){
        return (
                <View style={[ styles.container, { backgroundColor: '#fff' } ]}>
                        <Text>
                            <Icon name="rocket" size={30} color="#900" />
                            Conteúdo side bar
                        </Text>
                </View>
               );
    } 
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    }
}
);