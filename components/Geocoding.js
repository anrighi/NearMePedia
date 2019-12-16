import * as Location from 'expo-location';

export async function getTextAddress() {

    await Location.reverseGeocodeAsync({
        longitude: 11.971190,
        latitude: 57.709821
    }).then(res => {
        let address = res[0].street + ", " + res[0].city + ", " + res[0].country;
        console.log(address)
        return 'hello'
    })

}
