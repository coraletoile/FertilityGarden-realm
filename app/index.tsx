import { View, Text, TouchableOpacity, Pressable } from 'react-native'
import React from 'react'
import { Link, useRouter } from 'expo-router'
import {registerRootComponent} from 'expo'
import { useQuery, useRealm } from "@realm/react"

//import {Task} from './Task';
// import Realm from 'realm'
// import {ChecklistItemSchema }from './models/checklistItemSchema'

const Login = () => {
  const router = useRouter()
 //const schemas = [Task];

  // const realm = new Realm({ schema: [ChecklistItemSchema] });
  console.log(useQuery("Task"))
  



  const handlePress = ()=> {
    router.replace('/home')
    


  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems:'center' }}>
      <Pressable onPress={handlePress}>
        <Text>Login</Text>
      </Pressable>


      
        <Pressable onPress={()=> router.push('/signup')}>
          <Text> Create Account </Text>
        </Pressable>
       


      
        <Pressable onPress={()=> router.push('/components/forgotPassword')}>
          <Text> Forgot Password </Text>
        </Pressable>
       
     
      
    </View>
  )
}

export default Login