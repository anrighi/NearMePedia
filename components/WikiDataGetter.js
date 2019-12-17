import React from 'react';

export default function getWikiList(currLoc , wikiContainer) {

    var url = "https://en.wikipedia.org/w/api.php";

    var params = {
        action: "query",
        generator: "geosearch",
        prop: "coordinates|pageimages",
        ggscoord: currLoc.coord.lat + "|" + currLoc.coord.long,
        format: "json"
    }

    url = url + "?origin=*";
    Object.keys(params).forEach(function (key) {
        url += "&" + key + "=" + params[key];
    });

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            var pages = response.query.pages;
            let array;

            for (var page in pages) {

                let pageToCheck = pages[page];

                array = [...array, {title: pageToCheck.title,}];

                console.log(pages[page].title + ": " + pages[page].thumbnail.source);

                wikiContainer.setTitle(pages[page].title);
                wikiContainer.setImage(pages[page].thumbnail.source);
                wikiContainer.setCoordinates( pages[page].coordinates.lat, pages[page].coordinates.lon);
            }
        })
        .catch(function (error) {
            console.log(error);
        });

}
