import React, { useState} from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { TextInput } from 'react-native-gesture-handler';
import firebase from './firebaseconection';
import sucess from './sucess';
import {Button} from 'react-native-elements';
import { withTheme } from 'styled-components';

function TaskForm({navigation}){
    const style = StyleSheet.create({
        button: {
          backgroundColor:'#38b0de',
          borderRadius:15,
          borderWidth:1,
          borderColor:'white',
          width:300,
          margin:20,
        }
      })
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    
    const onChangeEmail = (txtEmail) => {
        setEmail(txtEmail)
    }
    const onChangePassword = (txtPassword) =>{
        setPassword(txtPassword)
    }
    const Cadastration = () => {
        firebase.auth().createUserWithEmailAndPassword(email,password).then(()=>{
            navigation.navigate('sucess')
        }).catch(()=>{

        })
    }
    return(
        <View style={{ flex: 1,alignItems: 'center', justifyContent: 'center', backgroundColor:'gray' }}>
            <Text>Cadastro de Usuários</Text>

            <Text>Email</Text>
            <TextInput
            style={{backgroundColor:'white', textAlign:'center', borderRadius:15, borderWidth:3, borderColor:'#38b0de', width:300, height:30, margin:10}} 
            value={email}
            onChangeText={txtEmail => onChangeEmail(txtEmail)}>
            </TextInput >

            <Text>Senha</Text>
            <TextInput
             secureTextEntry={true}
            style={{backgroundColor:'white',textAlign:'center',borderRadius:15, borderWidth:3, borderColor:'#38b0de', width:300, height:30,margin:10}} 
            value={password}
            onChangeText={txtPassword => onChangePassword(txtPassword)}
            >
            </TextInput>

            <Button
                buttonStyle={style.button}
                title="Cadastrar"
                onPress={Cadastration}
            >
            </Button>
        </View>
    );

}
const Stack = createStackNavigator();

function CadastrationForm() {
  return (
   
      <Stack.Navigator>
        <Stack.Screen name="TaskForm" component={TaskForm} />
        <Stack.Screen name="sucess" component={sucess} />
      </Stack.Navigator>
   
  );
}
export default CadastrationForm;