import * as Location from 'expo-location';

export async function getAddress(long, lat) {
    return Location.reverseGeocodeAsync({
        longitude: long,
        latitude: lat
    }).then(res => {
        return res[0].street + ", " + res[0].city + ", " + res[0].country;
    })
}

export async function getCoordinates(address) {
    return Location.geocodeAsync(address).then(res => {
        return {
            coord:
                {
                    long: res[0].longitude,
                    lat: res[0].latitude
                }
        }
    })
}
