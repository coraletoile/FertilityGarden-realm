import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'

const _layout = () => {
  return (
    <Tabs>
      <Tabs.Screen name='home'
      options={{ 
        tabBarLabel: 'Garden',
        headerTitle: 'Home Screen',
        
      }}
      />
      <Tabs.Screen 
      name="profile"
      options={{
        tabBarLabel: 'Account',
        headerTitle: 'My Account'
      }}
      />

    </Tabs>
  )
}

export default _layout