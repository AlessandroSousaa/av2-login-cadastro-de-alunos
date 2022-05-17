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
        
        <View style={{ flex: 1,alignItems: 'center', justifyContent: 'center', backgroundColor:'white' }}>
        <Text style={{fontSize:35, color:'#F2CA52'}}>Cadastrar Alunos</Text>
        <TextInput
        style={{backgroundColor:'white',fontSize:25,borderRadius:15,textAlign:'center', borderWidth:3, borderColor:'#F2CA52', width:300, height: 80}} 
        value={nome}
        onChangeText={txtNome => onChangeNome(txtNome)}
        >
        </TextInput>
        <View>
          <Text>cu</Text>
        </View>
        <TextInput
        style={{backgroundColor:'white',fontSize:25,textAlign:'center',borderRadius:15, borderWidth:3, borderColor:'#F2CA52', width:300, height: 80, }} 
        value={desc}
        onChangeText={txtDescription => onChangeDescription(txtDescription)}
        >
        </TextInput>
        <Button
            title="Cadastrar"
            onPress={InsertAluno}
        />
        <Button
            title="Atualizar"
            onPress={UpdateAluno}
        />
        <Button
            title="Deletar"
            onPress={DeleteAluno}
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