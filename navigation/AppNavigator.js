// navigation/AppNavigator.js
import React from 'react';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { View, Text, Image, FlatList, TouchableOpacity } from 'react-native';

import HomeScreen from '../components/HomeScreen';
import AboutScreen from '../components/AboutScreen';

const Drawer = createDrawerNavigator();

const AppNavigator = (props) => {
  return (
    <>
    
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home" drawerContent={props => {
    return (
      <DrawerContentScrollView >
        <View style={{ alignItems: 'center', padding: 16 }}>
        <Image
          style={{ width: 80, height: 80, borderRadius: 40, backgroundColor: "blue" }}
        />
        <Text style={{ marginTop: 8, fontSize: 16 }}>User Name</Text>
      </View>
        <DrawerItem label="Login" />
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    )
  }}>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="About" component={AboutScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
    </>
  );
};

export default AppNavigator;
