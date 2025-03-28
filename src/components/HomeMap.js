// HomeMap.js
import React, {useEffect, useRef, useState} from "react";
import MarkerOption from "./MarkerOption";
import Search from "./Search";

const HomeMap = () => {
    const naver = window.naver;
    const mapRef = useRef(null);
    const mapInstance = useRef(null);

    const [interactionOn, setInteractionOn] = useState(true);
    const [controlsOn, setControlsOn] = useState(true);

    useEffect(() => {
        const map = new naver.maps.Map(mapRef.current, {
            center: new naver.maps.LatLng(37.713955, 126.889456),
            zoom: 13,
            minZoom: 7,
            zoomControl: true,
            zoomControlOptions: {
                position: naver.maps.Position.TOP_RIGHT,
            },
        });

        map.setOptions("mapTypeControl", true);
        naver.maps.Event.addListener(map, "zoom_changed", (zoom) => {
            console.log("zoom:", zoom);
        });

        naver.maps.Event.once(map, "init", () => {
            console.log("지도 초기화 완료");
        });

        mapInstance.current = map;

        // 위치 가져오기
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(onSuccessGeolocation, onErrorGeolocation);
        }

        function onSuccessGeolocation(position) {
            const location = new naver.maps.LatLng(position.coords.latitude, position.coords.longitude);
            map.setCenter(location);
            map.setZoom(15);
            console.log("Coordinates:", location.toString());

            // 위치 마커
            const locationMarker = MarkerOption({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
                iconImg: "/media/icon_location.png"
            });
            new naver.maps.Marker({
                ...locationMarker,
                map: map,
            });
        }

        function onErrorGeolocation() {
            const center = map.getCenter();
        }

    }, []);

    return (
        <>
            <div id="map" ref={mapRef} style={{width: "93.9%", height: "100%", marginBottom: "10px"}}/>
            <Search></Search>
        </>
    );
};

export default HomeMap;
