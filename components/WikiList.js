import React from 'react';
import { ScrollView, StyleSheet, Image, Text, View, Button } from 'react-native';

export default class WikiList extends React.Component {

 render() {
   return (
       <View className="patient-container">
          <Button title="button" onClick={this.getWikiList()}>Click me</Button>
       </View>
   );
 }


getWikiList() {
	
  	var url = "https://en.wikipedia.org/w/api.php"; 

	var params = {
	    action: "query",
	    generator: "geosearch",
	    prop: "coordinates|pageimages",
	    ggscoord: "37.7891838|-122.4033522",
	    format: "json"
	}

	url = url + "?origin=*";
	Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

	fetch(url)
    .then(function(response){return response.json();})
    .then(function(response) {
        var pages = response.query.pages;
        for (var page in pages) {
            console.log(pages[page].title + ": " + pages[page].thumbnail.source);
        }
    })
    .catch(function(error){console.log(error);});
	
}

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});

