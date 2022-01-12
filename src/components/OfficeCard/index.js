import * as React from "react"
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import useTheme from "../../hooks/useTheme";
import { AnchorLink } from "gatsby-plugin-anchor-links";


const containerStyle = {
    width: '100%',
    height: '20vh'
};

// const center = {
//     lat: 36.71782288308034,
//     lng: -4.424975802343778
// };


export function OfficeCard({ addressUnite }) {

    const theme = useTheme();

    const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: process.env.GATSBY_GOOGLE_MAPS_API_KEY
    })

    // const [map, setMap] = React.useState(null)

    // const onLoad = React.useCallback(function callback(map) {
    //     const bounds = new window.google.maps.LatLngBounds();
    //     map.fitBounds(bounds);
    //     setMap(map)
    // }, [])

    // const onUnmount = React.useCallback(function callback(map) {
    //     setMap(null)
    // }, [])

    return isLoaded ? (
        <div className="w-100 md:w-6/12 xl:w-4/12 md:px-2 mb-2 md:mb-0">
            <div className="bg-white dark:bg-black dark:border-white rounded-lg overflow-hidden">
                <div>
                    {
                        theme === "dark" ?
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
                                                    "color": "#141414"
                                                },
                                                {
                                                    "lightness": 0
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
                                                },

                                            ]
                                        },

                                    ]
                                }}
                            >
                            </GoogleMap>
                            :
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
                                                    "color": "#f0f0f0"
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
                    }

                </div>
                <div className="p-3">
                    <span className="pretitle text-chestnut-rose">{addressUnite.city.toUpperCase()}</span>
                    <h3 className="text-md mb-0">{addressUnite.country.toUpperCase()}</h3>
                    <div className="flex flex-col lg:flex-row justify-between">
                        <div>
                            <span className="text-xs">{addressUnite.address}</span>
                        </div>
                        <div>
                            {
                                addressUnite.country === "Spain" ?

                                    <a className="text-xs" aria-label={`Link to ${addressUnite.phone} phone number`} href={`tel:${addressUnite.phone}`}>{addressUnite.phone}</a>
                                    :
                                    ""
                            }
                        </div>
                    </div>


                </div>
            </div>
        </div>
    ) : <></>
}