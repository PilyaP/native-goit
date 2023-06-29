import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";

export const MapScreen = () => {
  const route = useRoute();
  const geoLocation = route?.params?.params?.geoLocation || null;
  const [photoLocation, setPhotoLocation] = useState(geoLocation);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permission to access location was denied");
      }

      let location = await Location.getCurrentPositionAsync({});
      const coords = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      };
      setPhotoLocation(coords);
    })();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={{ flex: 1 }}
        region={{
          ...photoLocation,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        showsUserLocation={true}
      >
        {photoLocation && (
          <Marker
            title="Локація фотографії"
            coordinate={photoLocation}
            description="Локація"
          />
        )}
      </MapView>
    </View>
  );
};
