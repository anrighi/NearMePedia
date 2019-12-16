import React from 'react';
import { ScrollView, StyleSheet, Image, Text, View, Button } from 'react-native';
import POI from 'PoiCard';

export default class WikiList extends React.Component {

 render() {
   return (
       <View className="patient-container">
       		<Text>
       			{this.getWikiList()};
       		</Text>

       		
       </View>
   );
 }



const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

