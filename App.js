import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';

import DrawerNavigator from './routes/drawer'

const App=()=>{
  let [fontsLoaded] = useFonts({
        'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'),
      'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf'),
      });

  
      if (!fontsLoaded) {
        return <AppLoading />;
      }else{
        return(
          <NavigationContainer>
            <DrawerNavigator/>
          </NavigationContainer>
        )
}
}

export default App