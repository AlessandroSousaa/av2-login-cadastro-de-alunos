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
          backgroundColor:'#f4d16a',
          borderRadius:15,
          borderWidth:1,
          borderColor:'white',
          width:300,
          margin:20,
          height:80,
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
        <View style={{ flex: 1,alignItems: 'center', justifyContent: 'center', backgroundColor:'white' }}>
            <Text style={{paddingBottom:70, color:'#f4d16a', fontSize: 35}}>Cadastro de Usuários</Text>
            <Text style={{fontSize:35, color:'#f4d16a'}}>Email</Text>
            <TextInput
            placeholder='Digite seu e-mail'
            style={{backgroundColor:'white', textAlign:'center', borderRadius:15, borderWidth:3, borderColor:'#f4d16a', width:'75%', height:60, margin:10, fontSize:20}} 
            value={email}
            onChangeText={txtEmail => onChangeEmail(txtEmail)}>
            </TextInput >

            <Text style={{fontSize:35, color:'#f4d16a'}}>Senha</Text>
            <TextInput
            placeholder='Digite sua senha'
             secureTextEntry={true}
            style={{backgroundColor:'white',textAlign:'center',borderRadius:15, borderWidth:3, borderColor:'#f4d16a', width: '75%', height:60, margin:10, fontSize:20}} 
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
        <Stack.Screen name="TaskForm" component={TaskForm} options={{headerShown:false}}/>
        <Stack.Screen name="sucess" component={sucess} options={{headerShown:false}}/>
      </Stack.Navigator>
   
  );
}
export default CadastrationForm;