import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { authStateChangeUser } from "../redux/auth/authOperations";
import { StyleSheet, View } from "react-native";
import { useRoute } from "../router";

export const Main = () => {
  const { stateChange } = useSelector((state) => state.auth);
  console.log(stateChange);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authStateChangeUser());
  }, []);
  console.log(stateChange);
  const routing = useRoute(stateChange);
  return <View style={styles.container}>{routing}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  image: {
    flex: 1,
  },
});
