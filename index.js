/**
 * @format
 */

import {AppRegistry} from 'react-native'; // entery point - It tells React Native which component to launch for the app.
import App from './App';
import {name as appName} from './app.json'; // A configuration file where the application name is stored.
// name - It's internal name. It’s used by the system to identify the app in the project
// displayName - this is what we are going to see in mobile display.
// we can not do comment in json file.

AppRegistry.registerComponent(appName, () => App); //React Native starts the app from this component.
