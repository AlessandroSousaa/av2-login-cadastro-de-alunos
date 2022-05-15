import React, { useState } from 'react';
import { Text, Button, View } from 'react-native';
import firebase from './firebaseconection';
import { TextInput } from 'react-native-gesture-handler';
import login from './Login';
import { createStackNavigator } from '@react-navigation/stack';
import { database } from 'firebase';


function logado({navigation}) {
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
    const InsertProduto = () => {
        firebase.collection('produtos').add({nome:nome, desc:desc});
    }

    return(
        
        <View>
        <Text>Cadastrar Alunos</Text>
        <TextInput
        style={{backgroundColor:'white',fontSize:16,borderRadius:15,textAlign:'center', borderWidth:5, borderColor:'red', width:300}} 
        value={nome}
        onChangeText={txtNome => onChangeNome(txtNome)}
        >
        </TextInput>
        <TextInput
        style={{backgroundColor:'white',fontSize:16,textAlign:'center',borderRadius:15, borderWidth:5, borderColor:'red', width:300}} 
        value={desc}
        onChangeText={txtDescription => onChangeDescription(txtDescription)}
        >
        </TextInput>
        <Button
            title="Cadastrar"
            onPress={InsertProduto}
        />
        </View>
    );
}
const Stack = createStackNavigator();

function CadastrationForm() {
  return (
   
      <Stack.Navigator>
        <Stack.Screen name="logado" component={logado} />
        <Stack.Screen name="login" component={login} />
      </Stack.Navigator>
   
  );
}
export default CadastrationForm;