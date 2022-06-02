import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import CompScreen from "./src/screens/CompScreen";
import ListScreen from "./src/screens/ListScreen";
import ImgStack from "./src/screens/ImgStack";
import CounterZ from "./src/screens/CounterZ";
import ColorAdd from "./src/screens/ColorAdd";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Comp: CompScreen,
    List: ListScreen,
    ImgStk: ImgStack,
    CountZ: CounterZ,
    ClButt: ColorAdd
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
