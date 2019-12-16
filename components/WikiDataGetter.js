import React from 'react';
import { ScrollView, StyleSheet, Image, Text, View, Button } from 'react-native';

const wikiPages = [
  { title: '', source: '', coordinates: [ { lat: 0, lon: 0}, ] },
]

export default class getWikiList() extends React.Component {

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
        let array

        for (var page in pages) {

let pageToCheck = pages[page]

        	
        	array = [...array, {title: pageToCheck.title, }]

            console.log(pages[page].title + ": " + pages[page].thumbnail.source);
            this.wikiPages.title = pages[page].title;
            this.wikiPages.source = pages[page].thumbnail.source;
            this.wikiPages.coordinates.lat = pages[page].coordinates.lat;
            this.wikiPages.coordinates.lon = pages[page].coordinates.lon;
        }
    })
    .catch(function(error){console.log(error);});
	
}
