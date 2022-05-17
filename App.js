import * as React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from './Cadastration';
import Login from './Login';
import {Button} from 'react-native-elements';


function HomeScreen({navigation}) {
  const style = StyleSheet.create({
    button: {
      backgroundColor:'#38b0de',
      borderRadius:15,
      borderWidth:1,
      borderColor:'white',
      width:300,
      margin:5,
    },
    texto: {
      fontSize:50,
      color:'black',
      margin:25,

  }
  })
  return (
    <View>
      <Text style={style.texto}>CadAluno</Text>
    <View style={{ flex: 2, alignItems: 'center', justifyContent: 'center', backgroundColor:'gray', height:100}}>
      
      <Button 
        buttonStyle={style.button}
        title="Cadastrar"
        onPress={() => navigation.navigate('Cadastro')}
        
        />
      <Button
        buttonStyle={style.button}
        title="Login"
        onPress={() => navigation.navigate('Login')}
        
      />
    </View>
    </View>
        
  );
}

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerTitleAlign:'center'}}/>
        <Stack.Screen name="Cadastro" component={Cadastro} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;