import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import CompScreen from "./src/screens/CompScreen";
import exercise2X from "./src/screens/exercise2X";
import ListScreen from "./src/screens/ListScreen";
import exerList from "./src/screens/exerList";

const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Comp: CompScreen,
    Exc2: exercise2X,
    List: ListScreen,
    exLst: exerList,
  },
  {
    initialRouteName: "exLst",
    defaultNavigationOptions: {
      title: "App",
    },
  }
);

export default createAppContainer(navigator);
