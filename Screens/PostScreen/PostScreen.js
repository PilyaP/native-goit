import React, { useState, useEffect } from "react";
import {
  Text,
  Image,
  View,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { EvilIcons } from "@expo/vector-icons";

export const PostScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);

  return (
    <View style={styles.container}>
      <View style={styles.userWrapper}>
        <Image
          source={require("../../assets/avamid.png")}
          style={styles.image}
        />
        <View style={styles.userInfo}>
          <Text style={styles.userName}>Natali Romanova</Text>
          <Text style={styles.userEmail}>email@example.com</Text>
        </View>
      </View>

      <FlatList
        data={posts}
        keyExtractor={(item, indx) => indx.toString()}
        renderItem={({ item }) => (
          <View style={styles.postContainer}>
            <Image
              // source={item.photo}
              source={{ uri: item.photo }}
              style={styles.postImg}
            />

            <Text style={styles.postName}>{item.name}</Text>

            <View style={styles.infoWrap}>
              <TouchableOpacity
                style={styles.comments}
                onPress={() => {
                  navigation.navigate("Comments", { image: item.photo });
                }}
              >
                <EvilIcons name="comment" size={24} color="#BDBDBD" />
                <Text style={styles.commentText}>0</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.location}
                onPress={() =>
                  navigation.navigate("Map", {
                    name: item.name,
                    latitude: item.latitude,
                    longitude: item.longitude,
                  })
                }
              >
                <Ionicons
                  name="ios-location-outline"
                  size={24}
                  color="#BDBDBD"
                />
                <Text style={styles.locationText}>{item.location}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 32,
    backgroundColor: "#fff",
  },
  userWrapper: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
  },
  userInfo: {
    marginLeft: 8,
  },
  userName: {
    fontFamily: "Roboto-Bold",
    color: "#212121",
    fontSize: 13,
    lineHeight: 15,
  },
  userEmail: {
    fontFamily: "Roboto-Regular",
    color: "#212121CC",
    fontSize: 11,
    lineHeight: 13,
  },
  postContainer: {
    marginBottom: 20,
    paddingHorizontal: 4,
  },
  postImg: {
    width: "100%",
    height: 240,
    marginBottom: 8,
  },
  postName: {
    fontFamily: "Roboto-Medium",
    fontSize: 16,
    color: "#212121",
    lineHeight: 19,
    marginBottom: 11,
  },
  infoWrap: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  comments: { flexDirection: "row", alignItems: "center" },
  location: { flexDirection: "row", alignItems: "center" },
  commentText: {
    fontFamily: "Roboto-Medium",
    fontWeight: "400",
    fontSize: 16,
    color: "#BDBDBD",
    lineHeight: 19,
  },
  locationText: {
    fontFamily: "Roboto-Medium",
    fontWeight: "400",
    fontSize: 16,
    color: "#212121",
    lineHeight: 19,
    textDecorationLine: "underline",
  },
});
