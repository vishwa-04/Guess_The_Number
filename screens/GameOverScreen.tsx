import React from 'react';
import {View, StyleSheet, Text, Button} from 'react-native';
import {Card} from '../components/Card';
import color from '../constants/color';

function GameOverScreen({onRestart, userChoice}: any) {
  return (
    <View style={styles.screen}>
      <Card style={styles.cardScreen}>
        <Text style={styles.winnerText}>Hurrayyyyy You Won</Text>
        <Text style={styles.winnerText}>The number was : {userChoice}</Text>

        <View style={styles.playAgainbutton}>
          <Button
            title="Play Again"
            color={color.primary}
            onPress={onRestart}
          />
        </View>
      </Card>
    </View>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  cardScreen: {
    marginTop: '10%',
  },

  winnerText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  playAgainbutton: {
    marginTop: 30,
    paddingLeft: 30,
    paddingRight: 30,
  },
});
export default GameOverScreen;
