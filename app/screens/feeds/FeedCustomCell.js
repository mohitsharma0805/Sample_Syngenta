import React from 'react';
import { View, StyleSheet, Text, Pressable, Image } from 'react-native';
import { userProfile } from '../../assets/images';
import config from '../../config';

const FeedCustomCell = ({ item, onItemPress }) => {
  const onButtonPress = () => {
    onItemPress(item);
  };
  return (
    <Pressable style={styles.contentView} onPress={onButtonPress}>
      <Image
        resizeMode="cover"
        source={{
          uri: item?.children[4]?.attributes?.url,
        }}
        defaultSource={userProfile}
        style={styles.image}
      />
      <View style={styles.textBGView}>
        <Text style={styles.title} numberOfLines={1}>
          {item?.children[0]?.value}
        </Text>
        <Text style={styles.description} numberOfLines={2}>
          {item?.children[1]?.value}
        </Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  contentView: {
    width: '100%',
    minHeight: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    marginLeft: 20,
    height: 50,
    width: 50,
    borderRadius: 50,
  },
  title: {
    fontSize: 18,
    marginRight: 5,
  },
  description: {
    marginTop: 5,
    color: config.colors.description,
    fontSize: 14,
    marginRight: 5,
  },
  textBGView: { flex: 1, paddingVertical: 12, paddingHorizontal: 16 },
});

export default FeedCustomCell;
