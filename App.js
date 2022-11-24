import { useFonts } from "expo-font";
import ShopNavigator from "./src/navigation/ShopNavigator";

export default function App() {
  const [fontsLoader] = useFonts({
    lato: require("./src/assets/fonts/Lato-Regular.ttf"),
    latoBold: require("./src/assets/fonts/Lato-Bold.ttf"),
  });

  if (!fontsLoader) {
    return null;
  }

  return <ShopNavigator/>
}

