import React from 'react';
import { View, FlatList,Text } from 'react-native';
import { color } from 'react-native-reanimated';

//import { Container } from './styles';

export default function List() {
  const incidents = [
    item = {
        id: 1, 
        description: 1,},
    item = {
        id: 2, 
        description: 1,},
    item = {
        id: 3, 
        description: 1,},
    item = {
        id: 4, 
        description: 1,},
    item = {
        id: 5, 
        description: 1,},
        item = {
            id: 6, 
            description: 1,},
]
  return (
    <FlatList
    Vertical
    data={incidents}
    numColumns={2}
    keyExtractor={incident => String(incident.id)}
    showsVerticalScrollIndicator={false}
    renderItem={({item:incident}) => (
    <Text style={{color: "#000",backgroundColor:"lightgray", flex: 1, padding:100, justifyContent: "space-between"}} >{incident.description}</Text>
    )}
    />

  );
}
