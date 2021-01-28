import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { FeedsState } from '../../state';
import FeedCustomCell from './FeedCustomCell';
import config from '../../config';

const Feeds = ({ navigation }) => {
  const feedList = useSelector(FeedsState.selectFeed);
  const isRefreshing = useSelector(FeedsState.selectRefresh);
  const dispatch = useDispatch();

  useEffect(() => {
    // dispatch action to get all feeds
    dispatch({ type: 'GET_FEEDS', payload: {} });
  }, []);

  const feedClicked = (item) => {
    navigation.navigate('FeedDetails', { url: item.children[2]?.value ?? '' });
  };

  const renderItem = ({ item }) => {
    return <FeedCustomCell item={item} onItemPress={feedClicked} />;
  };

  const onRefresh = () => {
    // dispatch action to update state for refreshing
    dispatch(FeedsState.updateRefreshing(true));
    dispatch({ type: 'GET_FEEDS', payload: {} });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={feedList}
        renderItem={renderItem}
        ItemSeparatorComponent={() => {
          return <View style={styles.itemSeparator} />;
        }}
        keyExtractor={(item, index) => index.toString()}
        onRefresh={onRefresh}
        refreshing={isRefreshing}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  itemSeparator: {
    height: 1,
    marginLeft: 16,
    backgroundColor: config.colors.seperator,
  },
});

export default Feeds;
