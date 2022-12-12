import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons"

const CartItem = () => {
  return (
    <View>
      <View>
        <Text>Nombre</Text>
      </View>
      <View>
        <View>
            <Text>Cantidad:</Text>
            <Text>Precio:</Text>
        </View>
        <TouchableOpacity>
            <Ionicons name="trash" size={24} color="red"/>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartItem;

const styles = StyleSheet.create({});
