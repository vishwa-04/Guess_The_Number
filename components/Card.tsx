import React from 'react';
import {StyleSheet, View} from 'react-native';

export const Card = (props: any) => {
  return <View style={{...styles.card, ...props.style}}>{props.children}</View>;
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    elevation: 10,
    padding: 20,
    borderRadius: 10,
  },
});
