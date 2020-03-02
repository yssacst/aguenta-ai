import React , {Component} from 'react'
import { TextInput, Button } from 'react-native'

const CustomButton = (props) =>{
    return(
        <Button title={props.title} onPress={props.onPress}></Button>
    );
}

export default CustomButton;