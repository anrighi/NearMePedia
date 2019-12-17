import React from 'react';

export async function getWikiData(currLoc, container) {

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
    Object.keys(params).forEach(function (key) {
        url += "&" + key + "=" + params[key];
    });

    await fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            const pages = response.query.geosearch;
            let i = 0;
            let array = []

            for (let place in pages) {
                array = [...array, {
                    title: pages[place].title,
                    coord: {lat: pages[place].lat, lon: pages[place].lon, dist: pages[place].dist}
                }];
                i++;
            }
            container.addResult(array)

            console.log('Added results: ' + i);
        })
        .catch(function (error) {
            console.log(error);
        });
}
