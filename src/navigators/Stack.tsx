import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import DetailsScreen from '../screens/DetailsScreen';
import PaymentScreen from '../screens/PaymentScreen';

const NavigationStack = createNativeStackNavigator();

const Stack = () => {
  return (
    <NavigationStack.Navigator screenOptions={{headerShown: false}}>
      <NavigationStack.Screen
        name="Tab"
        component={TabNavigator}
        options={{animation: 'slide_from_bottom'}}
      />
      <NavigationStack.Screen
        name="Details"
        component={DetailsScreen}
        options={{animation: 'slide_from_bottom'}}
      />
      <NavigationStack.Screen
        name="Payment"
        component={PaymentScreen}
        options={{animation: 'slide_from_bottom'}}
      />
    </NavigationStack.Navigator>
  );
};

export default Stack;
