import React from 'react';

export default function getWikiList(currLoc , wikiContainer) {

    var url = "https://en.wikipedia.org/w/api.php";

    var params = {
        action: "query",
        list: "geosearch",
        gscoord: "37.7891838|-122.4033522",
        gsradius: "10000",
        gslimit: "10",
        format: "json"
    };

    url = url + "?origin=*";
    Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

    fetch(url)
        .then(function(response){return response.json();})
        .then(function(response) {
            let pages = response.query.geosearch;
            console.log(url)
            for (let place in pages) {
               // console.log(pages[place].title);
            }
        })
        .catch(function(error){console.log(error);});
}
