import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "../screens/CategoriesScreen";
import CategorieBreadScreen from "../screens/CategorieBreadScreen";
import BreadDetailsScreen from "../screens/BreadDetailsScreen";
import { COLORS } from "../constants/Colors";

const Stack = createNativeStackNavigator();

const ShopNavigator = () => {
  return (
    <NavigationContainer>
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
          name="Categories"
          component={CategoriesScreen}
          options={{
            title: "Mi Panaderia",
          }}
        />
        <Stack.Screen
          name="Bread"
          component={CategorieBreadScreen}
          options={({ route }) => ({
            title: route.params.name,
          })}
        />
        <Stack.Screen name="Details" component={BreadDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default ShopNavigator;
