import * as React from "react"
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { googleMapsApiKey } from "../../../credentials";

const containerStyle = {
    width: '100%',
    height: '55vh'
};

const center = {
    lat: 36.71780568282973,
    lng: -4.424986531178917
};

export function GoogleMaps() {




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
                    styles: [{
                        "elementType": "labels",
                        "stylers": [
                            {
                                "visibility": "off"
                            },
                            {
                                "color": "#f49f53"
                            }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "stylers": [
                            {
                                "color": "#f9ddc5"
                            },
                            {
                                "lightness": -7
                            }
                        ]
                    },
                    {
                        "featureType": "road",
                        "stylers": [
                            {
                                "color": "#813033"
                            },
                            {
                                "lightness": 43
                            }
                        ]
                    },
                    {
                        "featureType": "poi.business",
                        "stylers": [
                            {
                                "color": "#645c20"
                            },
                            {
                                "lightness": 38
                            }
                        ]
                    },
                    {
                        "featureType": "water",
                        "stylers": [
                            {
                                "color": "#1994bf"
                            },
                            {
                                "saturation": -69
                            },
                            {
                                "gamma": 0.99
                            },
                            {
                                "lightness": 43
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#f19f53"
                            },
                            {
                                "weight": 1.3
                            },
                            {
                                "visibility": "on"
                            },
                            {
                                "lightness": 16
                            }
                        ]
                    },
                    {
                        "featureType": "poi.business"
                    },
                    {
                        "featureType": "poi.park",
                        "stylers": [
                            {
                                "color": "#645c20"
                            },
                            {
                                "lightness": 39
                            }
                        ]
                    },
                    {
                        "featureType": "poi.school",
                        "stylers": [
                            {
                                "color": "#a95521"
                            },
                            {
                                "lightness": 35
                            }
                        ]
                    },
                    {},
                    {
                        "featureType": "poi.medical",
                        "elementType": "geometry.fill",
                        "stylers": [
                            {
                                "color": "#813033"
                            },
                            {
                                "lightness": 38
                            },
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {
                        "elementType": "labels"
                    },
                    {
                        "featureType": "poi.sports_complex",
                        "stylers": [
                            {
                                "color": "#9e5916"
                            },
                            {
                                "lightness": 32
                            }
                        ]
                    },
                    {},
                    {
                        "featureType": "poi.government",
                        "stylers": [
                            {
                                "color": "#9e5916"
                            },
                            {
                                "lightness": 46
                            }
                        ]
                    },
                    {
                        "featureType": "transit.station",
                        "stylers": [
                            {
                                "visibility": "off"
                            }
                        ]
                    },
                    {
                        "featureType": "transit.line",
                        "stylers": [
                            {
                                "color": "#813033"
                            },
                            {
                                "lightness": 22
                            }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "stylers": [
                            {
                                "lightness": 38
                            }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "geometry.stroke",
                        "stylers": [
                            {
                                "color": "#f19f53"
                            },
                            {
                                "lightness": -10
                            }
                        ]
                    },
                    {},
                    {},
                    {}]
                }}
            ></GoogleMap>

        </div>
    ) : <></>
}

export default React.memo(GoogleMaps)