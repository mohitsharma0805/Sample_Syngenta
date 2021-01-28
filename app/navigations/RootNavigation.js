import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import AuthNavigation from './AuthNavigation';
import config from '../config';
import { Splash } from '../screens';

const RootStack = createStackNavigator();

const RootNavigation = () => (
  <RootStack.Navigator
    screenOptions={() => {
      return {
        headerTintColor: config.colors.appTheme,
        headerTitleStyle: {
          color: config.colors.black,
        },
        headerBackTitle: 'Back',
      };
    }}>
    <RootStack.Screen
      name={config.routes.SPLASH}
      component={Splash}
      options={{ headerShown: false }}
    />
    <RootStack.Screen
      name={config.routes.AUTH_NAVIGATION}
      component={AuthNavigation}
      options={{ headerShown: false }}
    />
  </RootStack.Navigator>
);

export default RootNavigation;
