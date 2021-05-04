import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './src/topTabNavigation/TabNavigation';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Psaddict.gr" component={TabNavigation} options={{headerTitleStyle: {alignSelf: 'center'}}}/>
      </Stack.Navigator>
    </NavigationContainer>

  );
}

export default App;