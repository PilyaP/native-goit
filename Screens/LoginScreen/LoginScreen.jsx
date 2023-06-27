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

// export const LoginScreen = () => {
//   const [isActive, setIsActive] = useState("");
//   const [avatar, setAvatar] = useState(null);

//   function handleFocus(name) {
//     return () => {
//       setIsActive(name);
//     };
//   }
//   console.log(isActive);
//   function handleAddAvatar {

// }
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
//         <TouchableOpacity
//           onPress={(handleAddAvatar) => {
//             console.log("click");
//           }}
//         >
//           <Image style={null} source={require("../../assets/avatar.png")} />
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
} from "react-native";
import ImagePicker from "react-native-image-picker";

export const LoginScreen = () => {
  const [isActive, setIsActive] = useState("");
  const [avatar, setAvatar] = useState(null);

  function handleFocus(name) {
    return () => {
      setIsActive(name);
    };
  }

  const handleAddAvatar = () => {
    const options = {
      title: "Выберите аватар",
      storageOptions: {
        skipBackup: true,
        path: "images",
      },
    };

    ImagePicker.showImagePicker(options, (response) => {
      if (response.didCancel) {
        console.log("Отменено пользователем");
      } else if (response.error) {
        console.log("Ошибка: ", response.error);
      } else if (response.customButton) {
        console.log("Нажата пользовательская кнопка: ", response.customButton);
      } else {
        const source = { uri: response.uri };
        setAvatar(source);
      }
    });
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" && "padding"}
      keyboardVerticalOffset={200}
      style={styles.container}
    >
      <View
        style={{
          paddingHorizontal: "5%",
          height: 500,
          backgroundColor: "#FFFFFF",
          width: "100%",
          alignItems: "center",
        }}
      >
        <TouchableOpacity onPress={handleAddAvatar}>
          {avatar ? (
            <Image style={styles.avatar} source={avatar} />
          ) : (
            <Image
              style={styles.placeholder}
              source={require("../../assets/avatar.png")}
            />
          )}
        </TouchableOpacity>
        <Text>Реєстрація</Text>
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
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
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
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  placeholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
