import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import config from '../config';
import { OnBoarding, Feeds, FeedDetails } from '../screens';

const Stack = createStackNavigator();

const AuthNavigation = () => (
  <Stack.Navigator
    screenOptions={() => {
      return {
        headerTintColor: config.colors.appTheme,
        headerTitleStyle: {
          color: config.colors.black,
        },
        headerBackTitle: 'Back',
      };
    }}>
    <Stack.Screen
      name={config.routes.ONBOARDING}
      component={OnBoarding}
      options={{ headerShown: false }}
    />
    <Stack.Screen name={config.routes.FEEDS} component={Feeds} options={{ headerLeft: null }} />
    <Stack.Screen name={config.routes.FEEDS_DETAILS} component={FeedDetails} />
  </Stack.Navigator>
);

export default AuthNavigation;
