import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import Home from '../screens/Home'
import ReviewDetail from '../screens/ReviewDetail'
import About from '../screens/About'
import Header from '../shared/header'

const Stack=createStackNavigator()

const screenOptionStyle={
  headerStyle:{
    backgroundColor:"#eee",
    height:80
  },
  headerTintColor:"#444",
  
}

const HomeStackNavigator=()=>{
  return(
    <Stack.Navigator
     screenOptions={screenOptionStyle}>
      <Stack.Screen name='Home' component={Home} options={({navigation})=>({
       headerTitle:()=> <Header navigation={navigation} title='GameZone'/>
      })} />
      <Stack.Screen name='ReviewDetail' component={ReviewDetail} options={{ title: 'Review Details' }} />
    </Stack.Navigator>
  )
}

const AboutStackNavigator=()=>{
  return(
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name='About' component={About} options={({navigation})=>({
       headerTitle:()=> <Header navigation={navigation} title='About'/>
      })} />
    </Stack.Navigator>
  )
}

export {HomeStackNavigator,AboutStackNavigator}
