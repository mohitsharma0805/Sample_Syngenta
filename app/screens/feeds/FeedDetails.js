import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { WebView } from 'react-native-webview';

const FeedDetails = ({ route }) => {
  return (
    <SafeAreaView style={styles.container}>
      <WebView source={{ uri: route.params.url }} style={styles.container} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
});

export default FeedDetails;
