import React, { useState, useEffect} from 'react';
import { StyleSheet ,Text, Button, View,FlatList } from 'react-native';
import firebase from './firebaseconection';
import { TextInput } from 'react-native-gesture-handler';
import login from './Login';
import { createStackNavigator } from '@react-navigation/stack';
function logado({navigation}){
  if (firebase.auth().currentUser !== null){

  }else{
    navigation.navigate('login')
  }  

    const [nome, setNome] = useState('')
    const [desc, setDesc] = useState('')
    const [data, setData] = useState('')
    //const [user_id, setUserId] = useState('')
    const onChangeNome = (txtNome) => {
        setNome(txtNome)
    }
    const onChangeDescription = (txtDescription) =>{
        setDesc(txtDescription)
    }
    const InsertProduto = () => {
        firebase.firestore().collection('produtos').add({nome:nome, desc:desc,});
    }
    const Show = () => {
        firebase.firestore().collection("produtos");
        produtos.get().then((snapshot) => { snapshot.docs.forEach(doc => {
             
        })})
    }
    
 
      
    
    return(
        
        <View>
        <Text>Cadastrar Produtos</Text>
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
            buttonStyle={style.button}
            title="Cadastrar"
            onPress={InsertProduto}
        />
        
        <FlatList
          data={data}
          renderItem={({item}) => (
            <View style={{ marginBottom:5,borderRadius:15,backgroundColor:'black',borderWidth:4,borderColor:'green',height: 50, flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              <Text style={{color:'white', fontSize:15}}>Nome: {item.nome}</Text>
              <Text style={{color:'white', fontSize:15}}>Descrição: {item.desc}</Text>
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