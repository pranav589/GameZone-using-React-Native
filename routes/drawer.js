import React from 'react'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {AboutStackNavigator,HomeStackNavigator} from './StackNavigator'


const Drawer=createDrawerNavigator()

const DrawerNavigator=()=>{
  return(
    <Drawer.Navigator>
      <Drawer.Screen name='Home' component={HomeStackNavigator} />
      <Drawer.Screen  name='About' component={AboutStackNavigator} />
    </Drawer.Navigator>
  )
}

export default DrawerNavigator