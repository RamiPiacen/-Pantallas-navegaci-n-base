import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { CART } from "../data/Cart";
import CartItem from "../components/CartItem";

const CartScreen = () => {
  const items = CART;
  const total = 120;

  const handleConfirmCart = () => {
    alert("ya hiciste la compra");
  };

  const handleDeleteItem = () => {
    alert("borrar item");
  };

  const renderItem = ({ item }) => {
    <CartItem item={item} onDelete={handleDeleteItem} />;
  };

  return (
    <View style={styles.container}>
      <View style={styles.list}>
        <FlatList
          data={CART}
          keyExtractor={(item) => item.id}
          renderItem={renderItem}
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity style={styles.confirm}>
          <Text style={styles.text}>Confirmar</Text>
          <View style={styles.total}>
            <Text style={styles.text}>Total</Text>
            <Text style={styles.text}>{total}</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CartScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    backgroundColor: "#fff",
    paddingBottom: 120,
  },
  list: {
    flex: 1,
  },
  footer: {
    padding: 12,
    borderTopColor: "#ccc",
    borderTopWidth: 1,
  },
  confirm: {
    backgroundColor: "ccc",
    borderRadius: 10,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  total: {
    flexDirection: "row",
    margin: 5,
    gap: 5,
  },
  text: {
    fontSize: 18,
    padding: 8,
    fontFamily: "lato",
  },
});
