import { StyleSheet, View, Text, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState} from 'react';
import firebase from './firebaseconection';
import Logado from './logado';
import failedLogin from './failedlogin';
import {Button} from 'react-native-elements';

function HomeLogin({navigation}){
    const style = StyleSheet.create({
        button: {
          backgroundColor:'#f4d16a',
          borderRadius:15,
          borderWidth:1,
          borderColor:'white',
          width:300,
          margin:20,
          height:50,
        },
        texto: {
            fontSize:25,
            color:'#F2CA52',
            margin:1,
        },
      })
    function navegarSucess(){
        navigation.navigate('Logado')
    }
    function navegarFailed(){
        navigation.navigate('failedLogin')
    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')


    const onChangeEmail = (txtEmail) => {
        setEmail(txtEmail)
    }
    const onChangePassword = (txtPassword) =>{
        setPassword(txtPassword)
    }
    const login = () =>{
        firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
            navegarSucess()
        }).catch(()=>{
            navegarFailed()
        })
    }
    return(
        <View style={{ flex: 1,alignItems: 'center', justifyContent: 'center', backgroundColor:'white' }}>
            <Text style={style.texto}>E-mail</Text>
            <TextInput
             placeholder='Digite seu e-mail'
             style={{backgroundColor:'white', textAlign:'center', borderRadius:15, borderWidth:3, borderColor:'#f4d16a', width:300, height:50, margin:10, fontSize:15}} 
             value={email}
             onChangeText={txtEmail => onChangeEmail(txtEmail)}>
            </TextInput>

            <Text style={style.texto}>Senha</Text>
            <TextInput
             placeholder='Digite sua senha'
             secureTextEntry={true}
            style={{backgroundColor:'white',textAlign:"center" ,borderRadius:15, borderWidth:3, borderColor:'#f4d16a', width:300, height:50, margin:10, fontSize:15}} 
             value={password}
             onChangeText={txtPassword => onChangePassword(txtPassword)}>
            </TextInput>
            
            <Button 
            buttonStyle={style.button}
            title="Entrar"
            onPress={login}/>
        </View>
    );
}
const Stack = createStackNavigator();

function LoginForm() {
  return (
   
      <Stack.Navigator>
        <Stack.Screen name="HomeLogin" component={HomeLogin} />
        <Stack.Screen name="Logado" component={Logado} />
        <Stack.Screen name="failedLogin" component={failedLogin} />
      </Stack.Navigator>
   
  );
}
export default LoginForm;