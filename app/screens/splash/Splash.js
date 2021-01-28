import React, { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { StackActions } from '@react-navigation/native';
import config from '../../config';

const Splash = ({ navigation }) => {
  useEffect(() => {
    navigation.dispatch(StackActions.replace(config.routes.AUTH_NAVIGATION));
  });

  return <View style={styles.container} />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: 144,
    width: 144,
  },
});

export default Splash;
