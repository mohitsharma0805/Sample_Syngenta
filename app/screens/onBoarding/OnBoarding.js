import React from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import AppIntroSlider from 'react-native-app-intro-slider';
import { walkthrough1, walkthrough2, walkthrough3 } from '../../assets/images';
import config from '../../config';

const slides = [
  {
    key: '1',
    title: 'Title 1',
    text: 'First description',
    image: walkthrough1,
  },
  {
    key: '2',
    title: 'Title 2',
    text: 'Second description',
    image: walkthrough2,
  },
  {
    key: '3',
    title: 'Title 3',
    text: 'Third description',
    image: walkthrough3,
  },
];

const OnBoarding = ({ navigation }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.slide}>
        <Text style={styles.title}>{item.title}</Text>
        <Image style={styles.image} source={item.image} />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    );
  };

  const onDone = () => {
    navigation.navigate('Feeds');
  };

  return <AppIntroSlider renderItem={renderItem} data={slides} onDone={onDone} />;
};

export default OnBoarding;

const styles = StyleSheet.create({
  slide: {
    width: '100%',
    flex: 1,
    alignItems: 'center',
    backgroundColor: config.colors.onBoardingBG,
  },
  title: { marginTop: 100, fontSize: 18, color: 'white', marginBottom: 100 },
  image: { height: 300, width: 300 },
  text: { marginTop: 64, fontSize: 18, color: 'white' },
});
