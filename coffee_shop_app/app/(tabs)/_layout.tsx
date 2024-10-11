import React from 'react'
import {Tabs} from 'expo-router'
import Entypo from '@expo/vector-icons/Entypo';
import { FontAwesome6 } from '@expo/vector-icons';

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: '#C67C4E',
        }}
      >
        <Tabs.Screen 
          name='home'
          options={{
            headerShown: false,
            title: 'Home',
            tabBarIcon: ({color}) => (
              <Entypo name="home" size={24} color={color} />
            )
          }}
        />

        <Tabs.Screen 
          name='chatRoom'
          options={{
            headerShown: true,
            tabBarStyle: { display: 'none' },
            title: 'Chat Bot',
            tabBarIcon: ({color }) => (
              <FontAwesome6 name="robot" size={24} color={color} />
            )
          }}
        />

    <Tabs.Screen 
          name='order'
          options={{
            headerShown: true,
            tabBarStyle: { display: 'none' },
            title: 'Cart',
            tabBarIcon: ({color}) => (
              <Entypo name="shopping-cart" size={24} color={color} />
            )
          }}
        />
      </Tabs>
    </>
  )
}

export default TabsLayout