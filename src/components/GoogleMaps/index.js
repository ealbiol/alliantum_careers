import * as React from "react"
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { getAllAdresses } from "../../data/data";
import { OfficeCard } from "../OfficeCard";
import useTheme from "../../hooks/useTheme";

const containerStyle = {
    width: '100%',
    height: '55vh'
};

const center = {
    lat: 36.71780568282973,
    lng: -4.424986531178917
};

export function GoogleMaps() {

    const theme = useTheme();

    console.log("theme in googleMaps:", theme);
    const [addressUnite, setAddressUnite] = React.useState([])

    React.useEffect(() => {
        getAllAdresses().then((result) => {
            setAddressUnite(result)
        })
    }, [])



    // const [isDark, setIsDark] = React.useState(false)


    // React.useEffect(() => {

    //     if (localStorage.theme === "dark" || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    //         setIsDark(true)
    //     } else {
    //         setIsDark(false)
    //     }

    // }, [])


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

        <div className="map">
            {
                theme === "dark" ?
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={3.5}
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
                                        },
                                    ]
                                },
                                {
                                    "featureType": "water",
                                    "elementType": "geometry.fill",
                                    "stylers": [
                                        {
                                            "color": "#141414",

                                        }
                                    ]
                                },
                                {
                                    "featureType": "water",
                                    "elementType": "labels.text.fill",
                                    "stylers": [
                                        {
                                            "color": "#141414"
                                        },
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
                                        // label={address.city}
                                        scaledSize={new window.google.maps.Size(90, 90)}
                                        className="marker"
                                        icon={"data:image/svg+xml,%3Csvg width='24' height='34' viewBox='0 0 24 34' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.98482 2.53978L12.2755 1.27002L17.1429 2.32815L19.4708 4.86767L22.0103 8.67695L23.2801 12.2746L22.4336 17.5653L12.0639 31.9559L6.34995 24.9722L2.75229 19.4699L1.27091 16.7188L0.847656 13.3327L1.27091 9.73508L1.90579 7.19556L4.86856 4.44442L6.98482 2.53978Z' fill='%23D76166'/%3E%3Cpath d='M12 0C5.3832 0 0 5.64521 0 12.5841C0 17.0635 1.29938 18.8598 7.54345 27.492C8.62732 28.9904 9.85588 30.6887 11.2615 32.6541C11.4359 32.8978 11.7095 33.0413 12.0001 33.0413C12.2906 33.0413 12.5642 32.8977 12.7385 32.6539C14.1359 30.6992 15.3591 29.0073 16.4384 27.5146C22.6975 18.8573 24 17.0557 24 12.5841C24 5.64521 18.6168 0 12 0ZM14.9673 26.3449C14.0809 27.5709 13.0976 28.931 11.9998 30.4615C10.8945 28.9212 9.9056 27.5541 9.01428 26.3219C2.94055 17.9253 1.84615 16.4123 1.84615 12.5841C1.84615 6.71273 6.40117 1.93601 12 1.93601C17.5988 1.93601 22.1538 6.71273 22.1538 12.5841C22.1538 16.4048 21.0566 17.9224 14.9673 26.3449Z' fill='%23D76166'/%3E%3Cpath d='M11.9635 5.50244C8.4006 5.50244 5.50195 8.54217 5.50195 12.2785C5.50195 16.0148 8.4006 19.0545 11.9635 19.0545C15.5264 19.0545 18.425 16.0148 18.425 12.2785C18.425 8.54217 15.5264 5.50244 11.9635 5.50244ZM11.9635 17.1185C9.41857 17.1185 7.34811 14.9473 7.34811 12.2785C7.34811 9.60969 9.41857 7.43845 11.9635 7.43845C14.5084 7.43845 16.5789 9.60969 16.5789 12.2785C16.5789 14.9473 14.5084 17.1185 11.9635 17.1185Z' fill='white'/%3E%3C/svg%3E"}
                                    ></Marker>
                                )
                            })
                        }

                    </GoogleMap>
                    :
                    <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={3.5}
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
                                        },
                                    ]
                                },
                                {
                                    "featureType": "water",
                                    "elementType": "geometry.fill",
                                    "stylers": [
                                        {
                                            "color": "#f0f0f0",

                                        },
                                    ]
                                },
                                {
                                    "featureType": "water",
                                    "elementType": "labels.text.fill",
                                    "stylers": [
                                        {
                                            "color": "#f0f0f0"
                                        },
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
                                        // label={address.city}
                                        scaledSize={new window.google.maps.Size(90, 90)}
                                        className="marker"
                                        icon={"data:image/svg+xml,%3Csvg width='24' height='34' viewBox='0 0 24 34' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M6.98482 2.53978L12.2755 1.27002L17.1429 2.32815L19.4708 4.86767L22.0103 8.67695L23.2801 12.2746L22.4336 17.5653L12.0639 31.9559L6.34995 24.9722L2.75229 19.4699L1.27091 16.7188L0.847656 13.3327L1.27091 9.73508L1.90579 7.19556L4.86856 4.44442L6.98482 2.53978Z' fill='%23D76166'/%3E%3Cpath d='M12 0C5.3832 0 0 5.64521 0 12.5841C0 17.0635 1.29938 18.8598 7.54345 27.492C8.62732 28.9904 9.85588 30.6887 11.2615 32.6541C11.4359 32.8978 11.7095 33.0413 12.0001 33.0413C12.2906 33.0413 12.5642 32.8977 12.7385 32.6539C14.1359 30.6992 15.3591 29.0073 16.4384 27.5146C22.6975 18.8573 24 17.0557 24 12.5841C24 5.64521 18.6168 0 12 0ZM14.9673 26.3449C14.0809 27.5709 13.0976 28.931 11.9998 30.4615C10.8945 28.9212 9.9056 27.5541 9.01428 26.3219C2.94055 17.9253 1.84615 16.4123 1.84615 12.5841C1.84615 6.71273 6.40117 1.93601 12 1.93601C17.5988 1.93601 22.1538 6.71273 22.1538 12.5841C22.1538 16.4048 21.0566 17.9224 14.9673 26.3449Z' fill='%23D76166'/%3E%3Cpath d='M11.9635 5.50244C8.4006 5.50244 5.50195 8.54217 5.50195 12.2785C5.50195 16.0148 8.4006 19.0545 11.9635 19.0545C15.5264 19.0545 18.425 16.0148 18.425 12.2785C18.425 8.54217 15.5264 5.50244 11.9635 5.50244ZM11.9635 17.1185C9.41857 17.1185 7.34811 14.9473 7.34811 12.2785C7.34811 9.60969 9.41857 7.43845 11.9635 7.43845C14.5084 7.43845 16.5789 9.60969 16.5789 12.2785C16.5789 14.9473 14.5084 17.1185 11.9635 17.1185Z' fill='white'/%3E%3C/svg%3E"}
                                    ></Marker>
                                )
                            })
                        }

                    </GoogleMap>
            }

            <div className="container-main -mt-6">
                <div className="flex justify-center" >
                    {
                        addressUnite.map((address, index) => {
                            return (
                                <OfficeCard key={index} addressUnite={address} />
                            )
                        })
                    }
                </div>
            </div>

        </div>
    ) : <></>
}

export default React.memo(GoogleMaps)