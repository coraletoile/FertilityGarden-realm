import { View, Text, Button, StyleSheet, TextInput, TouchableOpacity} from 'react-native'
import React, { useRef, useState } from 'react'
import { Stack, useGlobalSearchParams, useRouter, Link } from 'expo-router'
import { CustomModal } from './_modal';  // Adjust path as necessary
import Checkbox  from 'expo-checkbox';
import topicsData from '../data/topicsData.json';
import  { useChecklistStore } from '../stores/store'
import { useQuery,useRealm } from '@realm/react';
import { BSON } from 'realm';

const Flower = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedChecklistId, setSelectedChecklistId] = useState<number | null>(null);
  const [isChecked, setChecked] = useState(false)

  //zustand state and actions
  const checkedStates = useChecklistStore((state) => state.checkedStates);
  const toggleItem = useChecklistStore((state) => state.toggleItem);

  const { id } = useGlobalSearchParams();
  const topicId = Number(id)
  const topic = topicsData.topics.find((topic) => topic.id === Number(id));
console.log(id)

//playing with realm
  const realm = useRealm()
  //const [inputVal, setInputVal]= useState('')
  const descriptionRef = useRef()
  const tasks = useQuery("Task")

  const addTask = () => {
    realm.write(() => {
      const newTask = realm.create("Task", {
        _id: new BSON.ObjectId(),
        description: descriptionRef.current,
        createdAt: new Date(), // Set the date when creating the object
        isComplete: false,
        userId:"test",
      })
      
      // clear input field
      //descriptionRef.current = ""
      //setInputVal('')

      // return Task
      return newTask

    });

  }
  return (
    
    // note topicId below in toggleItem, that is from params. item.id is from JSON object required in.
    <View style={styles.container}>
      <Stack.Screen options={{headerTitle: `headerTitle${id}`, headerShown: false}} />
      <Text> {topic?.title} {topic?.id} </Text>
      <Text>{topic?.description}</Text>
      {topic?.checklistItems.map((item) => (
        <View key={item.id} style={styles.row}>
          <Checkbox value={checkedStates[`${topicId}-${item.id}`]||false} 
          color="purple" onValueChange={() => toggleItem(topicId, item.id)} />
          <Text>{item.title}</Text>
          <Button title="i" onPress={() => {
            setModalVisible(true);
            setSelectedChecklistId(item.id);
          }} />
        </View>
      ))}
      
      {selectedChecklistId && (
        <CustomModal
          id={selectedChecklistId}
          isVisible={isModalVisible}
          onClose={() => setModalVisible(false)}
          content={topic?.checklistItems.find(item => item.id === selectedChecklistId)?.modalContent.content}
        />
      )}
      <View>
        <TextInput 
        placeholder="Enter New Task"
        autoCapitalize='none'
        nativeID="description"
        multiline={true}
        numberOfLines= {8}
        value={descriptionRef.current}
        onChangeText={(text) => {
          descriptionRef.current= text
        }}
        style={styles.textInput}
        
        
        />
        {/* button to save the new task */}
        <TouchableOpacity 
          style= {styles.button} 
          onPress={() => {
            addTask()
            

          }}>
            <Text> Save Task </Text>
          
        </TouchableOpacity>
        <Text> {JSON.stringify(tasks)}</Text>

      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  title: {
    fontSize: 18,
    margin: 16,
    fontWeight: "700",
  },
  label: {
    marginBottom: 8,
    fontSize: 18,
    fontWeight: "500",
    // color: "#455fff",
  },
  textInput: {
    fontSize: 20,
    borderWidth: 1,
    borderRadius: 4,
    // borderColor: "#455fff",
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginBottom: 0,
    marginHorizontal: 16,
  },
  button: {
    backgroundColor: "grey",
    padding: 10,
    borderRadius: 5,
    marginTop: 8,
    marginLeft: 16,
    width: 120,
  },
});

export default Flower;



// const Flower = () => {
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [isChecked, setChecked] = useState(false)


//  const { id } = useGlobalSearchParams()
//  const topic = topicsData.topics.find((topic) => topic.id === Number(id));

//  return (
//    <View style= {styles.container}>
//       <Stack.Screen options={{headerTitle: `headerTitle${id}`, headerShown: false}} />
//      <Text> Details for {id} </Text>
//      <View style={styles.row}>
//      <Checkbox value={isChecked} color="purple" onValueChange={setChecked}> </Checkbox>
//      <Text> sleep habits </Text>
//      <Button title="i" onPress={() => setModalVisible(true)} />
//      </View>
     
//      <CustomModal id={id} isVisible={isModalVisible} onClose={() => setModalVisible(false)}  />



//    </View>
//  )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     alignItems: 'center',
//     justifyContent:'center'
//   },
//   row: {
//     flexDirection: 'row',
//     alignItems: 'center'
//   }
// })

// export default Flower

//onValueChange passes new boolean value