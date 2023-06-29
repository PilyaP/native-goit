// import React, { useState } from "react";
// import {
//   KeyboardAvoidingView,
//   StyleSheet,
//   Text,
//   TextInput,
//   View,
//   Platform,
//   Image,
//   TouchableOpacity,
// } from "react-native";
// import * as ImagePicker from "react-native-image-picker";

// export const LoginScreen = () => {
//   const [isActive, setIsActive] = useState("");
//   const [avatar, setAvatar] = useState({
//     uri: "https://raw.githubusercontent.com/alex-neveroff/react-native-hw/main/assets/images/avatar-blanc.jpg",
//   });

//   function handleFocus(name) {
//     return () => {
//       setIsActive(name);
//     };
//   }
//   console.log(isActive);

//   const handleAddAvatar = () => {
//     const options = {
//       mediaType: "photo",
//       quality: 1,
//       includeBase64: false,
//       maxHeight: 500,
//       maxWidth: 500,
//     };

//     ImagePicker.launchImageLibrary(options, (response) => {
//       if (!response.didCancel) {
//         const selectedAvatar = {
//           uri: response.uri,
//           type: response.type,
//           name: response.fileName || "avatar.jpg",
//         };

//         setAvatar(selectedAvatar);
//       }
//     });
//   };

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === "ios" && "padding"}
//       keyboardVerticalOffset={200}
//       style={styles.container}
//     >
//       <View
//         style={{
//           paddingHorizontal: "5%",
//           height: 500,
//           backgroundColor: "#FFFFFF",
//           width: "100%",
//           alignItems: "center",
//         }}
//       >
//         <TouchableOpacity onPress={handleAddAvatar}>
//           {/* <Image style={null} source={require("../../assets/avatar.png")} /> */}
//           <Image style={styles.avatar} source={{ uri: avatar.uri }} />
//         </TouchableOpacity>
//         <Text>Реєстрація</Text>
//         <TextInput
//           onFocus={handleFocus("login")}
//           style={[styles.input, isActive === "login" && styles.active]}
//           placeholder="Логін"
//         />
//         <TextInput
//           onFocus={handleFocus("email")}
//           style={[styles.input, isActive === "email" && styles.active]}
//           placeholder="Адреса електронної пошти"
//         />
//         <TextInput
//           onFocus={handleFocus("password")}
//           style={[styles.input, isActive === "password" && styles.active]}
//           placeholder="Пароль"
//         />
//       </View>
//     </KeyboardAvoidingView>
//   );
// };
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "flex-end",
//     alignItems: "center",
//   },
//   input: {
//     backgroundColor: "#E8E8E8",
//     width: "100%",
//     marginVertical: 10,
//     borderRadius: 5,
//     paddingHorizontal: 15,
//   },
//   active: {
//     backgroundColor: "#ffffff",
//     borderColor: "#FF6C00",
//     borderWidth: 1,
//   },
// });

import React, { useState } from "react";
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Platform,
  Image,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Circle, Path, Svg } from "react-native-svg";
import Logo from "../../logos/logo.svg";
export const LoginScreen = () => {
  const [isActive, setIsActive] = useState("");
  const [avatar, setAvatar] = useState(null);

  const handleFocus = (name) => {
    return () => {
      setIsActive(name);
    };
  };

  const handleAddAvatar = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) setAvatar(result.assets[0].uri);
  };

  const handleDeleteAvatar = () => {
    setAvatar(null);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        onPress={Keyboard.dismiss}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        keyboardVerticalOffset={200}
        style={styles.container}
      >
        <View style={styles.contentContainer}>
          {avatar && (
            <Image
              source={{ uri: avatar }}
              style={{
                width: 120,
                height: 120,
                borderRadius: 16,
              }}
            />
          )}
          {!avatar ? (
            <TouchableOpacity onPress={handleAddAvatar}>
              <Image
                source={require("../../assets/emty.png")}
                style={styles.avatarEmpty}
              />
              <Svg
                style={styles.addAvatarSvg}
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Circle
                  cx="12.5"
                  cy="12.5"
                  r="12"
                  fill="white"
                  stroke="#FF6C00"
                />
                <Path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13 6H12V12H6V13H12V19H13V13H19V12H13V6Z"
                  fill="#FF6C00"
                />
              </Svg>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.delAvatarSvg}
              onPress={handleDeleteAvatar}
            >
              <Svg
                width="37"
                height="37"
                viewBox="0 0 37 37"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <Circle
                  cx="18.4999"
                  cy="18.5"
                  r="12"
                  transform="rotate(-45 18.4999 18.5)"
                  fill="white"
                  stroke="#E8E8E8"
                />
                <Path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M14.2574 13.5503L13.5503 14.2574L17.7929 18.5L13.5503 22.7426L14.2574 23.4497L18.5 19.2071L22.7426 23.4497L23.4498 22.7426L19.2071 18.5L23.4498 14.2574L22.7426 13.5503L18.5 17.7929L14.2574 13.5503Z"
                  fill="#BDBDBD"
                />
              </Svg>
            </TouchableOpacity>
          )}

          <Text style={styles.regText}>Реєстрація</Text>
          <TextInput
            onFocus={handleFocus("login")}
            style={[styles.input, isActive === "login" && styles.active]}
            placeholder="Логін"
          />
          <TextInput
            onFocus={handleFocus("email")}
            style={[styles.input, isActive === "email" && styles.active]}
            placeholder="Адреса електронної пошти"
          />
          <TextInput
            onFocus={handleFocus("password")}
            style={[styles.input, isActive === "password" && styles.active]}
            placeholder="Пароль"
          />
        </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  contentContainer: {
    paddingHorizontal: "5%",
    height: "70%",
    backgroundColor: "#FFFFFF",
    width: "100%",
    alignItems: "center",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  addAvatarSvg: {
    position: "absolute",
    top: 11,
    right: 50,
  },
  delAvatarSvg: {
    position: "absolute",
    bottom: 30,
    right: 20,
  },
  regText: {
    marginTop: 72,
    fontWeight: "500",
    fontSize: 30,
    lineHeight: 35,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#E8E8E8",
    width: "100%",
    marginVertical: 10,
    borderRadius: 5,
    paddingHorizontal: 15,
  },
  active: {
    backgroundColor: "#ffffff",
    borderColor: "#FF6C00",
    borderWidth: 1,
  },
  avatarEmpty: {
    width: 120,
    height: 120,
    borderRadius: 16,
    top: 30,
    right: 15,
  },
});
