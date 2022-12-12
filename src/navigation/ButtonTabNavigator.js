import { StyleSheet, View, Text } from "react-native-web";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import ShopNavigator from "./ShopNavigator";
import CartNavigator from "./CartNavigator";
import Ionicons from "@expo/vector-icons/Ionicons"

const BottomTabs = createBottomTabNavigator();

const ButtonTabNavigator = () => {
  return (
    <NavigationContainer>
      <BottomTabs.Navigator
        initialRouteName="ShopTab"
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: styles.tabBar,
        }}
      >
        <BottomTabs.Screen
          name="ShopTab"
          component={ShopNavigator}
          options={{
            tabBarIcon: ({ focus }) => (
              <View style={styles.item}>
                <Ionicons name="home" size={20} color="black"/>
                <Text>tienda</Text>
              </View>
            ),
          }}
        />
        <BottomTabs.Screen
          name="CartTab"
          component={CartNavigator}
          options={{
            tabBarIcon: ({ focus }) => (
              <View style={styles.item}>
                
                <Ionicons name="cart" size={20} color="black"/>
                <Text>Carrito</Text>
              </View>
            ),
          }}
        />
      </BottomTabs.Navigator>
    </NavigationContainer>
  );
};
export default ButtonTabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    shadowColor: "#7f5df0",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 0.5,
    elevation: 5,
    position: "absolute",
    bottom: 25,
    left: 20,
    rigth: 20,
    borderRadius: 15,
    height: 90,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
