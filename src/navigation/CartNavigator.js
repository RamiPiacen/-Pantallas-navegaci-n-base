import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { COLORS } from "../constants/Colors";
import CartScreen from "../screens/CartScreen";

const Stack = createNativeStackNavigator();

const CartNavigator = () => {
  return (
      <Stack.Navigator
        initialRouteName="Categories"
        screenOptions={{
          headerStyle: { backgroundColor: COLORS.primary },
          headerTintColor: COLORS.secundary,
          headerTitleStyle: {
            fontWeight: "bold",
          },
        }}
      >
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{ title: "Carrito" }}
        />
      </Stack.Navigator>
  );
};
export default CartNavigator;
