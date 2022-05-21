import React, { useState, useEffect } from 'react';
import { Text, Button, View } from 'react-native';
import firebase from './firebaseconection';
import { FlatList, TextInput } from 'react-native-gesture-handler';
import login from './Login';
import { createStackNavigator } from '@react-navigation/stack';
import { database } from 'firebase';
import { firestore } from 'firebase';


function logado({navigation}) {
  if (firebase.auth().currentUser !== null){

  }else{
    navigation.navigate('login')
  }  

    const [nome, setNome] = useState('')
    const [desc, setDesc] = useState('')
    const [data, setData] = useState('')

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
      firebase.firestore().collection('alunos').doc('').set({nome:nome, desc:desc});
    }

    const DeleteAluno = () => {
      firebase.firestore().collection('alunos').doc('id').delete();
    }


    const Show = () => {
      firebase.firestore().collection("alunos");
      alunos.get().then((snapshot) => { snapshot.docs.forEach(doc =>{ 
      })})
  }
  const ref = firebase.firestore().collection('alunos');
    useEffect(() => {
      ref.onSnapshot(querySnapshot => {
        const data = []
        querySnapshot.forEach(doc => {
          data.push({ 
            ...doc.data(),
            key:doc.id
          })
        })
        setData(data)
      })
      return() => ref()
    }, [])

    return(
        
        <View style={{ flex: 1,alignItems: 'center', justifyContent: 'center', backgroundColor:'white' }}>
        <Text style={{fontSize:35, color:'#F2CA52'}}>Cadastrar Alunos</Text>
        <View><Text>Aluno</Text></View>
        <TextInput
        style={{backgroundColor:'white',fontSize:25,borderRadius:15,textAlign:'center', borderWidth:3, borderColor:'#F2CA52', width:300, height: 80}} 
        value={nome}
        onChangeText={txtNome => onChangeNome(txtNome)}
        >
        </TextInput>

        <View><Text>Descrição</Text></View>
        
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

        
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View>
            <Text>Nome: {item.nome} </Text>
            <Text>Descrição: {item.desc} </Text>

            <Button
            title="Deletar"
            onPress={DeleteAluno}
            />

            <Button
            title="Atualizar"
            onPress={UpdateAluno}
            />

            </View>
        )}
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