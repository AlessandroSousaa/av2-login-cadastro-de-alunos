import React, { useState } from 'react';
import { Text, Button, View } from 'react-native';
import firebase from './firebaseconection';
import { TextInput } from 'react-native-gesture-handler';
import login from './Login';
import { createStackNavigator } from '@react-navigation/stack';
import { database } from 'firebase';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function Logado({navigation}) {
  if (firebase.auth().currentUser !== null){

  }else{
    navigation.navigate('login')
  }  

    const [nome, setNome] = useState('')
    const [desc, setDesc] = useState('')

    const onChangeNome = (txtNome) => {
        setNome(txtNome)
    }
    const onChangeDescription = (txtDescription) =>{
        setDesc(txtDescription)
    }
    const InsertAluno = () => {
        firebase.firestore().collection('alunos').add({nome:nome, desc:desc});
    }

    const UpdateAluno = () => {
      firebase.firestore().collection('alunos').doc('urDrQgGyspP3sHMOGdXM').set({nome:nome, desc:desc});
    }

    const DeleteAluno = () => {
      firebase.firestore().collection('alunos').doc('oCv4LMiqMsDVVQ8EpzSq').delete();
    }

    return(
        
        <View style={{ flex: 1,alignItems: 'center', justifyContent: 'center', backgroundColor:'gray' }}>
        <Text>Cadastrar Alunos</Text>
        <TextInput
        style={{backgroundColor:'white',fontSize:16,borderRadius:15,textAlign:'center', borderWidth:5, borderColor:'#38b0de', width:300}} 
        value={nome}
        onChangeText={txtNome => onChangeNome(txtNome)}
        >
        </TextInput>
        <TextInput
        style={{backgroundColor:'white',fontSize:16,textAlign:'center',borderRadius:15, borderWidth:5, borderColor:'#38b0de', width:300}} 
        value={desc}
        onChangeText={txtDescription => onChangeDescription(txtDescription)}
        >
        </TextInput>
        </View>
    );
}
const Stack = createStackNavigator();

function CadastrationForm() {
  return (
   
      <Stack.Navigator>
        <Stack.Screen name="logado" component={Logado} options={{headerShown:false}} />
        <Stack.Screen name="login" component={login} options={{headerShown:false}} />
      </Stack.Navigator>
   
  );
}

export default CadastrationForm;