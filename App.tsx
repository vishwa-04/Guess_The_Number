/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Headers} from './components/Headers';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import GameOverScreen from './screens/GameOverScreen';

function App(): JSX.Element {
  const [userNumber, setUserNumber] = useState<number>();
  const [guessRounds, setGuessRounds] = useState<number>(0);

  function startGameHandler(selectedNumber: number) {
    setUserNumber(selectedNumber);
  }
  function gameOverHandler(numOfRounds: number) {
    setGuessRounds(numOfRounds);
  }
  function playAgainHandler() {
    setGuessRounds(0);
    setUserNumber(null);
  }

  let content = <StartGameScreen onGameStart={startGameHandler} />;

  if (userNumber && guessRounds <= 0) {
    content = (
      <GameScreen userChoice={userNumber} onGameOver={gameOverHandler} />
    );
  } else if (guessRounds > 0) {
    content = (
      <GameOverScreen onRestart={playAgainHandler} userChoice={userNumber} />
    );
  }
  return (
    <ScrollView>
      <View style={styles.screen}>
        <Headers title="Guess a number" />
        {content}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});

export default App;
