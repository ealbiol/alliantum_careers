import * as React from "react"
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';



const containerStyle = {
    width: '100%',
    height: '20vh'
};

// const center = {
//     lat: 36.71782288308034,
//     lng: -4.424975802343778
// };


export function OfficeCard({ addressUnite }) {

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.GATSBY_GOOGLE_MAPS_API_KEY
    })

    const [map, setMap] = React.useState(null)

    // const onLoad = React.useCallback(function callback(map) {
    //     const bounds = new window.google.maps.LatLngBounds();
    //     map.fitBounds(bounds);
    //     setMap(map)
    // }, [])

    // const onUnmount = React.useCallback(function callback(map) {
    //     setMap(null)
    // }, [])

    return isLoaded ? (
        <div className="w-4/12 px-2">
            <div className="border border-loblolly-600 rounded-lg overflow-hidden">
                <div>
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={{
                            lat: addressUnite.lat,
                            lng: addressUnite.lng
                        }}
                        zoom={13}
                        options={{
                            zoomControl: false,
                            mapTypeControl: false,
                            scaleControl: false,
                            streetViewControl: false,
                            rotateControl: false,
                            fullscreenControl: false,
                            styles: [
                                {
                                    "featureType": "water",
                                    "elementType": "geometry",
                                    "stylers": [
                                        {
                                            "color": "#e9e9e9"
                                        },
                                        {
                                            "lightness": 17
                                        }
                                    ]
                                },
                                {
                                    "featureType": "landscape",
                                    "elementType": "geometry",
                                    "stylers": [
                                        {
                                            "color": "#f5f5f5"
                                        },
                                        {
                                            "lightness": 20
                                        }
                                    ]
                                },
                                {
                                    "featureType": "road.highway",
                                    "elementType": "geometry.fill",
                                    "stylers": [
                                        {
                                            "color": "#ffffff"
                                        },
                                        {
                                            "lightness": 17
                                        }
                                    ]
                                },
                                {
                                    "featureType": "road.highway",
                                    "elementType": "geometry.stroke",
                                    "stylers": [
                                        {
                                            "color": "#ffffff"
                                        },
                                        {
                                            "lightness": 29
                                        },
                                        {
                                            "weight": 0.2
                                        }
                                    ]
                                },
                                {
                                    "featureType": "road.arterial",
                                    "elementType": "geometry",
                                    "stylers": [
                                        {
                                            "color": "#ffffff"
                                        },
                                        {
                                            "lightness": 18
                                        }
                                    ]
                                },
                                {
                                    "featureType": "road.local",
                                    "elementType": "geometry",
                                    "stylers": [
                                        {
                                            "color": "#ffffff"
                                        },
                                        {
                                            "lightness": 16
                                        }
                                    ]
                                },
                                {
                                    "featureType": "poi",
                                    "elementType": "geometry",
                                    "stylers": [
                                        {
                                            "color": "#f5f5f5"
                                        },
                                        {
                                            "lightness": 21
                                        }
                                    ]
                                },
                                {
                                    "featureType": "poi.park",
                                    "elementType": "geometry",
                                    "stylers": [
                                        {
                                            "color": "#dedede"
                                        },
                                        {
                                            "lightness": 21
                                        }
                                    ]
                                },
                                {
                                    "elementType": "labels.text.stroke",
                                    "stylers": [
                                        {
                                            "visibility": "on"
                                        },
                                        {
                                            "color": "#ffffff"
                                        },
                                        {
                                            "lightness": 16
                                        }
                                    ]
                                },
                                {
                                    "elementType": "labels.text.fill",
                                    "stylers": [
                                        {
                                            "saturation": 36
                                        },
                                        {
                                            "color": "#333333"
                                        },
                                        {
                                            "lightness": 40
                                        }
                                    ]
                                },
                                {
                                    "elementType": "labels.icon",
                                    "stylers": [
                                        {
                                            "visibility": "off"
                                        }
                                    ]
                                },
                                {
                                    "featureType": "transit",
                                    "elementType": "geometry",
                                    "stylers": [
                                        {
                                            "color": "#f2f2f2"
                                        },
                                        {
                                            "lightness": 19
                                        }
                                    ]
                                },
                                {
                                    "featureType": "administrative",
                                    "elementType": "geometry.fill",
                                    "stylers": [
                                        {
                                            "color": "#fefefe"
                                        },
                                        {
                                            "lightness": 20
                                        }
                                    ]
                                },
                                {
                                    "featureType": "administrative",
                                    "elementType": "geometry.stroke",
                                    "stylers": [
                                        {
                                            "color": "#fefefe"
                                        },
                                        {
                                            "lightness": 17
                                        },
                                        {
                                            "weight": 1.2
                                        }
                                    ]
                                }
                            ]
                        }}
                    >
                    </GoogleMap>
                </div>
                <div className="pt-3 mb-3 p-3">
                    <span className="pretitle">{addressUnite.city.toUpperCase()}</span>
                    <h3>{addressUnite.country.toUpperCase()}</h3>
                    <span>{addressUnite.address}</span>
                </div>
            </div>
        </div>
    ) : <></>
}