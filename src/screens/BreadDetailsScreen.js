import { StyleSheet, Text, View} from "react-native";
import React from "react";
import { useSelector } from "react-redux";

const BreadDetailScreen = () => {
  const bread = useSelector((state) => state.bread.selected);
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>CategoriesScreen</Text>
    </View>
  );
};

export default BreadDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFCC4C",
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    fontFamily: "latoBold",
  },
});
