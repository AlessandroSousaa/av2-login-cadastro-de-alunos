import React from 'react';
import { Text } from 'react-native';
import {StyleSheet, View} from 'react';
import { LinearGradient } from 'expo-linear-gradient';

function Falha(){
    return(
        <Text style={{alignSelf:'center', paddingTop:'75%', fontSize:20, color:'red' }}>Usuário ou senha invalidos!!!</Text>
    );
}

export default Falha;