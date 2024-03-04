// import 'expo-dev-client';
// import 'react-native-get-random-values';
// import React from 'react';
// import {registerRootComponent} from 'expo'
import 'react-native-gesture-handler'
// import {AppWrapperNonSync} from './app/AppWrapperNonSync';
// import {AppWrapperSync} from './app/AppWrapperSync';
// import {SYNC_CONFIG} from './sync.config';
// import { View, Text, TouchableOpacity, Pressable } from 'react-native'
// import React from 'react'
// import { Link, useRouter } from 'expo-router'

// // const App = () =>
// //   SYNC_CONFIG.enabled ? (
// //     <AppWrapperSync appId={SYNC_CONFIG.appId} />
// //   ) : (
// //     <AppWrapperNonSync />
// //   );

// // registerRootComponent(App);


// // import { View, Text, TouchableOpacity, Pressable } from 'react-native'
// // import React from 'react'
// // import { Link, useRouter } from 'expo-router'
// // import Realm from 'realm'
// // import {ChecklistItemSchema }from './models/checklistItemSchema'

// const Login = () => {
//   const router = useRouter()

//   // const realm = new Realm({ schema: [ChecklistItemSchema] });

//   const handlePress = ()=> {
//     router.replace('/home')
    


//   }
//   return (
//     <View style={{flex: 1, justifyContent: 'center', alignItems:'center' }}>
//       <Pressable onPress={handlePress}>
//         <Text>Login</Text>
//       </Pressable>


      
//         <Pressable onPress={()=> router.push('/signup')}>
//           <Text> Create Account </Text>
//         </Pressable>
       


      
//         <Pressable onPress={()=> router.navigate('/components/forgotPassword')}>
//           <Text> Forgot Password </Text>
//         </Pressable>
       
     
      
//     </View>
//   )
// }

//export default Login

import { Text } from 'react-native';
export default function Page() {
  return <Text>Home page</Text>;
}