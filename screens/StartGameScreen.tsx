import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableNativeFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import {Card} from '../components/Card';
import {Input} from '../components/Input';
import color from '../constants/color';

function StartGameScreen({onGameStart}: any) {
  const [enteredValue, setEnteredValue] = useState<string>('');
  const [selectedNumber, setSelectedNumber] = useState<number>();
  const [isConfirmed, setIsConfirmed] = useState(false);

  const InputHandler = (inputNumber: string) => {
    setEnteredValue(inputNumber.replace(/[^0-9]/g, ''));
  };
  const resetInputHandler = () => {
    setEnteredValue('');
    setIsConfirmed(false);
  };
  const confirmInputHandler = () => {
    // eslint-disable-next-line radix
    let chosenNumber = parseInt(enteredValue);
    if (Number.isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid Number!', 'Number has to be between 1 to 99.', [
        {text: 'Okay', style: 'default', onPress: resetInputHandler},
      ]);
      return;
    }
    setIsConfirmed(true);
    setSelectedNumber(chosenNumber);
    setEnteredValue('');
  };

  let confirmedOutput;
  if (isConfirmed) {
    confirmedOutput = (
      <Card style={styles.summaryContainer}>
        <Text style={styles.summaryTextContainer}>
          Chosen Number : {selectedNumber}
        </Text>
        <View>
          <Button
            title="START GAME"
            onPress={() => onGameStart(selectedNumber)}
          />
        </View>
      </Card>
    );
  }
  return (
    <TouchableNativeFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.screen}>
        <Text style={styles.title}>Start a New Game</Text>
        <Card style={styles.inputContainer}>
          <View style={styles.inputContainer}>
            <Text style={styles.subtitle}>Select a number</Text>
            <Input
              style={styles.input}
              blurOnSubmit
              autoCapatalize="none"
              autoCorrect={false}
              maxLength={2}
              keyboardType="number-pad"
              onChangeText={InputHandler}
              value={enteredValue}
            />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button
                  title="reset"
                  onPress={resetInputHandler}
                  color={color.accent}
                />
              </View>
              <View style={styles.button}>
                <Button
                  title="confirm"
                  onPress={confirmInputHandler}
                  color={color.primary}
                />
              </View>
            </View>
          </View>
        </Card>
        {confirmedOutput}
      </View>
    </TouchableNativeFeedback>
  );
}
const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  inputContainer: {
    width: 300,
    maxWidth: '80%',
    alignItems: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 20,
    marginVertical: 10,
    color: 'black',
  },
  subtitle: {
    color: 'black',
    fontSize: 18,
  },
  button: {
    width: 85,
  },

  input: {
    width: 50,
    textAlign: 'center',
    fontSize: 25,
    color: 'black',
    fontWeight: 'bold',
  },
  summaryContainer: {
    marginVertical: '10%',
    color: 'black',
    fontSize: 20,
    padding: 30,
  },
  summaryTextContainer: {
    color: color.primary,
    fontSize: 20,
    fontWeight: 'bold',
    padding: 30,
  },
});
export default StartGameScreen;
