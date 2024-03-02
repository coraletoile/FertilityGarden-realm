import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'
import { Link } from 'expo-router';

const home = () => {
  const flowerPlots = [
  { id: '1', name: 'Rose' }, 
  { id: '2', name: 'Peony' }, 
  {id: '3', name: 'Lavender'}, 
  {id: '4', name: 'Violet'}, 
  {id: '5', name: 'Jasmine'}, 
  {id: '6', name: 'Sunflower'}, 
  {id: '7', name: 'Orchid'}, 
  {id: '8', name: 'Daisy'}, 
  {id: '9', name: 'Tulip'}, 
 
]; // Example flower plots
  return (
    <View>
       {flowerPlots.map((plot) => (
        <Link key={plot.id} href={`../plots/${plot.id}`} style={{ margin: 10 }}>
          <Text>{plot.name}</Text>
        </Link>
      ))} 
    </View>
  );
}

export default home