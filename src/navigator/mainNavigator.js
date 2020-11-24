import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings178427Navigator from '../features/Settings178427/navigator';
import UserProfile178420Navigator from '../features/UserProfile178420/navigator';
import Settings178419Navigator from '../features/Settings178419/navigator';
import Settings178417Navigator from '../features/Settings178417/navigator';
import SignIn2178415Navigator from '../features/SignIn2178415/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings178427: { screen: Settings178427Navigator },
UserProfile178420: { screen: UserProfile178420Navigator },
Settings178419: { screen: Settings178419Navigator },
Settings178417: { screen: Settings178417Navigator },
SignIn2178415: { screen: SignIn2178415Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
