
import * as React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import Countries from './screens/countries'
import Global from './screens/global'
import India from './screens/india'
import Precautions from './screens/precautions'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import {createAppContainer} from "react-navigation"

export default class App extends React.Component {
  render(){
  return (
   <AppContainer></AppContainer>
   
  );
  }
}
const BottomNavigator=createMaterialBottomTabNavigator({
  Global:{screen:Global,
  navigationOptions:{tabBarIcon:<Image source={require('./globe.jpg')} style={{width:50,height:50,borderRadius:30}}></Image>}},
  Countries:{screen:Countries,
  navigationOptions:{tabBarIcon:<Image source={require("./global.jpg")} style={{width:50,height:50,borderRadius:30}}></Image>}},
  India:{screen:India,
    navigationOptions:{tabBarIcon:<Image source={require("./india.jpg")} style={{width:50,height:50,borderRadius:30}}></Image>}},
  Precautions:{screen:Precautions,
    navigationOptions:{tabBarIcon:<Image source={require("./recovered.png")} style={{width:50,height:50,borderRadius:30}}></Image>}},
})
const AppContainer=createAppContainer(BottomNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
