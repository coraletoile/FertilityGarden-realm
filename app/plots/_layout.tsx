import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useGlobalSearchParams } from 'expo-router';
import { Stack, useRouter } from 'expo-router'
//import CustomModal from './_modal'; // Adjust the import path as necessary



const PlotsLayout = () => {

  interface CustomModalProps {
    isVisible: boolean;
    onClose: () => void;
    id: string | string[]; 
  }


  const router = useRouter()
  const [isModalVisible, setModalVisible] = useState(false);
  const { id } = useGlobalSearchParams();

 return (
    <Stack>
     <Stack.Screen name="index"  />
     <Stack.Screen name='_modal' options ={{ presentation:'modal',
headerLeft: ()=> (
  <Button 
    title="Close"
    onPress={()=> {
    router.back()
  }}
  />
)}} /> 

   </Stack>

 )
}

export default PlotsLayout