import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategorieBreadScreen from "../screens/CategorieBreadScreen";
import BreadDetailsScreen from "../screens/BreadDetailsScreen";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="Bread" component={CategorieBreadScreen} />
        <Stack.Screen name="Details" component={BreadDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default ShopNavigator;  