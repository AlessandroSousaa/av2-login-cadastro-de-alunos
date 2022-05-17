import * as React from 'react';
import { StyleSheet, View, Text, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Cadastro from './Cadastration';
import Login from './Login';
import {Button} from 'react-native-elements';
import { LinearGradient } from 'expo-linear-gradient';

function HomeScreen({navigation}) {
  const style = StyleSheet.create({
    button: {
      backgroundColor:'#f4d16a',
      borderRadius:15,
      borderWidth:1,
      borderColor:'white',
      width:300,
      margin:5,
    },
    texto: {
      fontSize:50,
      color:'white',
      margin:25,
      alignSelf:'center',
      fontWeight:'bold'

  }
  })
  return (
    
    <View style={{flex:1, backgroundColor:'#f7e099'}}>
      <LinearGradient colors={['#F2CA52', '#f4d16a', '#f6d981', '#f7e099']} style={{paddingTop:80}}>
          <Image source={require('./logo.png')} style={{alignSelf:'center'}}/>
      <Text style={style.texto}>CadAluno</Text>
      </LinearGradient>
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor:'white', borderTopLeftRadius:30, borderTopRightRadius:30, height:'50%'}}>
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
        <Stack.Screen name="Home" component={HomeScreen} options={{headerTitleAlign:'center', headerShown:false}}/>
        <Stack.Screen name="Cadastro" component={Cadastro} options={{ headerTintColor: 'white', headerTitleAlign:'center', headerStyle:{backgroundColor:'#f4d16a'}, headerTitleStyle:{color:'white'}}} />
        <Stack.Screen name="Login" component={Login} options={{ headerTintColor: 'white', headerTitleAlign:'center', headerStyle:{backgroundColor:'#f4d16a'}, headerTitleStyle:{color:'white'}}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;