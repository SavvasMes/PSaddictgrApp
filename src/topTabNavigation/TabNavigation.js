import React from 'react';
import {useWindowDimensions} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import NewsScreen from '../Screens/NewsScreen';
import SettingsScreen from '../Screens/SettingsScreen';
import ReviewsScreen from '../Screens/ReviewsScreen';
import FeaturesScreen from '../Screens/FeaturesScreen';
import StilesScreen from '../Screens/StilesScreen';
import GameCastScreen from '../Screens/GameCastScreen';
import VideosScreen from '../Screens/VideosScreen';
import DealsScreen from '../Screens/DealsScreen';

const Tab = createMaterialTopTabNavigator();



function MyTabs() {
    const { width } = useWindowDimensions()
  return (
    <Tab.Navigator
        tabBarOptions={{ 
            labelStyle: {textTransform: 'none', backgroundColor: 'cyan', width: width/4, marginRight: 15},
            // allowFontScaling: true,
            indicatorStyle: {opacity: 0},
            style: {elevation: 0},
            scrollEnabled: true,

         }}
    >
      <Tab.Screen name="News" component={NewsScreen} />
      <Tab.Screen name="Reviews" component={ReviewsScreen} />
      <Tab.Screen name="Απόψεις" component={FeaturesScreen} />
      <Tab.Screen name="Στήλες" component={StilesScreen} />
      <Tab.Screen name="Gamecast" component={GameCastScreen} />
      <Tab.Screen name="Video" component={VideosScreen} />
      <Tab.Screen name="Προσφορές" component={DealsScreen} />
    </Tab.Navigator>
  );
}

export default MyTabs;