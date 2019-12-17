import * as Location from 'expo-location';

export async function getAddress(long, lat) {

    await Location.reverseGeocodeAsync({
        longitude: long,
        latitude: lat
    }).then(res => {
        let address = res[0].street + ", " + res[0].city + ", " + res[0].country;
        return address;
    })
}

export async function getCoordinates(address) {

    return Location.geocodeAsync(address).then(res => {

        let object = {
            accuracy: res[0].accuracy,
            coord:
                {
                    long: res[0].longitude,
                    lat: res[0].latitude
                }
        }
        return object
    })
}

