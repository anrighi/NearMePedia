import React from 'react';
import { ScrollView, StyleSheet, Image, Text, View, Button } from 'react-native';
import Poicard from './PoiCard';
import DevLocation from './DevLocation';

export default class WikiList extends React.Component {

 render() {
   return (
       <View className="patient-container">	
       		<Poicard title='titolo'/>	
       		<DevLocation/>
       </View>
   );
 }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

