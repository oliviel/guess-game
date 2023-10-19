import { useState } from "react";
import { View, TextInput, StyleSheet, Alert, Text } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import defaultTheme from "../constants/theme";
import InstrutionText from "../components/InstrutionText";

interface Props {
  onPickNumber: (pickedNumber: number) => void;
}

const StartGame = ({ onPickNumber }: Props) => {
  const [enteredNumber, setEnteredNumber] = useState("");

  function handleInputChange(input: string) {
    setEnteredNumber(input);
  }

  function handlReset() {
    setEnteredNumber("");
  }

  function handleConfirm() {
    const chosenNumber = parseInt(enteredNumber);

    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert("Invalid Number", "Number has to be from 1 to 99", [
        {
          text: "Okey",
          style: "destructive",
          onPress: handlReset,
        },
      ]);
      return;
    }

    onPickNumber(chosenNumber);
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <View style={styles.inputContainer}>
        <View style={styles.numberInputContainer}>
          <InstrutionText style={styles.instrutionText}>
            Enter a number:
          </InstrutionText>
          <TextInput
            onChangeText={handleInputChange}
            maxLength={2}
            value={enteredNumber}
            style={styles.numberInput}
            keyboardType="number-pad"
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handlReset}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={handleConfirm}>Confirm</PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 16,
  },
  instrutionText: {
    textAlign: "center",
  },
  inputContainer: {
    padding: 16,
    elevation: 4,
    marginTop: 36,
    borderRadius: 8,
    marginHorizontal: 24,
    backgroundColor: defaultTheme.colors.primary700,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
  numberInputContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  numberInput: {
    width: 50,
    height: 50,
    fontSize: 32,
    color: defaultTheme.colors.secondary500,
    marginVertical: 8,
    textAlign: "center",
    borderBottomWidth: 2,
    borderBottomColor: defaultTheme.colors.secondary500,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGame;
