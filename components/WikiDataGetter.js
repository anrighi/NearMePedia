import React from 'react';

export function getWikiData(currLoc, container) {

    container.resetResult();

    var url = "https://en.wikipedia.org/w/api.php";

    var params = {
        action: "query",
        list: "geosearch",
        gscoord: currLoc.state.coord.lat + "|" + currLoc.state.coord.long,
        gsradius: "10000",
        gslimit: "20",
        format: "json"
    };

    url = url + "?origin=*";
    Object.keys(params).forEach(function(key){url += "&" + key + "=" + params[key];});

    fetch(url)
        .then(function(response){return response.json();})
        .then(function(response) {
            const pages = response.query.geosearch;
            var i = 0;
            for (let place in pages) {
                container.addResult(pages[place].title, pages[place].lat, pages[place].lon, pages[place].dist);
                i++;
            }
            console.log('Added results: ' +i);
        })
        .catch(function(error){console.log(error);});
}
