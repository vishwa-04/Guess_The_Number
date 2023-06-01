import React, {useState, useRef, useEffect} from 'react';
import {View, StyleSheet, Text, Button, Alert} from 'react-native';
import {Card} from '../components/Card';

function generateRandomBetween(
  min: number,
  max: number,
  exclude: number,
): number {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}
function GameScreen({userChoice, onGameOver}: any) {
  const [currentGuess, setCurrentGuess] = useState(
    generateRandomBetween(1, 100, userChoice),
  );
  const [rounds, setRounds] = useState(0);
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  useEffect(() => {
    if (currentGuess === userChoice) {
      onGameOver(rounds);
    }
  }, [currentGuess, userChoice, onGameOver, rounds]);
  const nextGuessHandler = (direction: string) => {
    if (
      (direction === 'lower' && currentGuess < userChoice) ||
      (direction === 'greater' && currentGuess > userChoice)
    ) {
      Alert.alert('Dont lie', 'This is wrong', [
        {text: 'Sorry', style: 'default'},
      ]);
      return;
    }
    if (direction === 'lower') {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess,
    );
    setCurrentGuess(nextNumber);
    setRounds(currRound => currRound + 1);
  };
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      <Card style={styles.buttonContainer}>
        <Text style={styles.guessText}>{currentGuess}</Text>
        <Button title="LOWER" onPress={() => nextGuessHandler('lower')} />
        <Button
          title="GREATER"
          onPress={() => {
            nextGuessHandler('greater');
          }}
        />
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
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    width: 300,
    maxWidth: '80%',
  },
  guessText: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
});
export default GameScreen;
