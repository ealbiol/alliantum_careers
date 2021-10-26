import * as React from "react"
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { googleMapsApiKey } from "../../../credentials";
import { getAllAdresses } from "../../data/data";
import marker from "../../images/marker.svg"

const containerStyle = {
    width: '100%',
    height: '55vh'
};

const center = {
    lat: 36.71780568282973,
    lng: -4.424986531178917
};

export function GoogleMaps() {

    const [addressUnite, setAddressUnite] = React.useState([])

    React.useEffect(() => {
        getAllAdresses().then((result) => {
            setAddressUnite(result)
            console.log(result);
        })
    }, [])


    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: googleMapsApiKey
    })

    const [map, setMap] = React.useState(null)

    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds();
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])


    return isLoaded ? (

        <div className="map">
            <div>Office Card</div>

            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={1.8}
                options={{
                    zoomControl: false,
                    mapTypeControl: false,
                    scaleControl: false,
                    streetViewControl: false,
                    rotateControl: false,
                    fullscreenControl: false,
                    styles: [
                        {
                            "featureType": "all",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#f5f5f5"
                                }
                            ]
                        },
                        {
                            "featureType": "all",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "all",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#616161"
                                }
                            ]
                        },
                        {
                            "featureType": "all",
                            "elementType": "labels.text.stroke",
                            "stylers": [
                                {
                                    "color": "#f5f5f5"
                                }
                            ]
                        },
                        {
                            "featureType": "all",
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#c0c0c0"
                                },
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.country",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.country",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "visibility": "on"
                                },
                                {
                                    "color": "#ffffff"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.country",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                },
                                {
                                    "visibility": "on"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.country",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "color": "#8abc00"
                                },
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.neighborhood",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.land_parcel",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "administrative.land_parcel",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#bdbdbd"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#dbdbdb"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape.man_made",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "color": "#dbdbdb"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape.man_made",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#dbdbdb"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape.man_made",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "visibility": "on"
                                },
                                {
                                    "color": "#dbdbdb"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape.man_made",
                            "elementType": "geometry.stroke",
                            "stylers": [
                                {
                                    "visibility": "off"
                                },
                                {
                                    "color": "#ffffff"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape.man_made",
                            "elementType": "labels",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#eeeeee"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#757575"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#c0c0c0"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "labels.icon",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#dadada"
                                }
                            ]
                        },
                        {
                            "featureType": "road.highway",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#616161"
                                }
                            ]
                        },
                        {
                            "featureType": "road.arterial",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#757575"
                                }
                            ]
                        },
                        {
                            "featureType": "road.local",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#9e9e9e"
                                }
                            ]
                        },
                        {
                            "featureType": "transit",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.line",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#e5e5e5"
                                }
                            ]
                        },
                        {
                            "featureType": "transit.station",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#eeeeee"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "color": "#c9c9c9"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry.fill",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "labels.text.fill",
                            "stylers": [
                                {
                                    "color": "#ffffff"
                                }
                            ]
                        }
                    ]
                }}
            >

                {
                    addressUnite.map((address, index) => {
                        return (
                            <Marker
                                key={index}
                                position={{ lat: address.lat, lng: address.lng }}
                                name={address.city}
                                label={
                                    address.city
                                }
                                scaledSize={new window.google.maps.Size(90, 90)}
                                className="marker"
                                icon={
                                    marker
                                }
                            />
                        )
                    })
                }

            </GoogleMap>

        </div>
    ) : <></>
}

export default React.memo(GoogleMaps)