import React from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>YYYC</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
});
export default Home;
