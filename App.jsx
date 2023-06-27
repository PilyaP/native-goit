import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, View } from "react-native";
import { LoginScreen } from "./Screens/LoginScreen/LoginScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./assets/bgpic.png")}
        style={styles.backgroundImage}
      />

      <LoginScreen />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    // justifyContent: "center",
  },
  backgroundImage: {
    position: "absolute",
    width: "100%",
    resizeMode: "cover",
  },
});
{
  /* <View style={styles.container}>
      <ImageBackground
        source={require("./assets/bgpic.png")}
        style={styles.backgroundImage}
      >
        
        <LoginScreen />

        <StatusBar style="auto" />
      </ImageBackground>
    </View> */
}
