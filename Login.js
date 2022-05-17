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
          backgroundColor:'#38b0de',
          borderRadius:15,
          borderWidth:1,
          borderColor:'white',
          width:300,
          margin:20,
        },
        texto: {
            fontSize:35,
            color:'white',
            margin:25,
        }
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
            <Text style={{paddingBottom:70, color:'#f4d16a', fontSize: 36}}>Login de Usuários</Text>
            <Text style={style.texto}>E-mail</Text>
            <TextInput
             placeholder='Digite seu e-mail'
             style={{backgroundColor:'white', textAlign:'center', borderRadius:15, borderWidth:3, borderColor:'#f4d16a', width:'75%', height:60, margin:10, fontSize:20}} 
             value={email}
             onChangeText={txtEmail => onChangeEmail(txtEmail)}>
            </TextInput>

            <Text>Senha</Text>
            <TextInput
             secureTextEntry={true}
            style={{backgroundColor:'white',textAlign:"center" ,borderRadius:15, borderWidth:3, borderColor:'#f4d16a', width:'75%', height:60, margin:10, fontSize:20}} 
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
        <Stack.Screen name="HomeLogin" component={HomeLogin} options={{headerShown:false}} />
        <Stack.Screen name="Logado" component={Logado} options={{headerShown:false}}  />
        <Stack.Screen name="failedLogin" component={failedLogin} options={{headerShown:false}} />
      </Stack.Navigator>
   
  );
}
export default LoginForm;