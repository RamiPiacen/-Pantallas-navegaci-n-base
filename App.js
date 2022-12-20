import { useFonts } from "expo-font";
import ButtonTabNavigator from "./src/navigation/ButtonTabNavigator";
import { Provider } from "react-redux";
import store from "./src/store";

export default function App() {
  const [fontsLoader] = useFonts({
    lato: require("./src/assets/fonts/Lato-Regular.ttf"),
    latoBold: require("./src/assets/fonts/Lato-Bold.ttf"),
  });

  if (!fontsLoader) {
    return null;
  }

  return (
    <Provider store={store}>
      <ButtonTabNavigator />
    </Provider>
  );
}
