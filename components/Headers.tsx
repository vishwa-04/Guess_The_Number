import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import color from '../constants/color';
export const Headers = (props: {title: string}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingTop: 36,
    backgroundColor: color.primary,
    height: 90,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerTitle: {
    fontSize: 25,
    color: 'white',
  },
});
