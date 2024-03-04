import { View, Text } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'

const ProfilePage = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems:'center' }}>
      <Link href='/'> Log out </Link>
    </View>
  )
}

export default ProfilePage