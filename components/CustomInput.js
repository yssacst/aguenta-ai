import React , {Component} from 'react'
import { TextInput, Button } from 'react-native'

const CustomInput = (props) =>{
    return(
        <TextInput value={props.value} />
    );
}

export default CustomInput;