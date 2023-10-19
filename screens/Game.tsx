import { useEffect, useState } from "react";
import { View, StyleSheet, Alert, Text, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Title from "../components/Title";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import InstrutionText from "../components/InstrutionText";
import GuessLogItem from "../components/GuessLogItem";

interface Props {
  userNumber: number;
  onGameOver: (numberOfRounds: number) => void;
}

function generateRandomNumber(min: number, max: number, exclude: number) {
  const rndNum = Math.floor(Math.random() * (max - min) + min);

  if (rndNum === exclude) {
    return generateRandomNumber(min, max, exclude);
  }

  return rndNum;
}

let maxBoundry = 0;
let minBoundry = 100;

const Game = ({ userNumber, onGameOver }: Props) => {
  const initialGuess = generateRandomNumber(1, 100, userNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [guessRounds, setGuessRounds] = useState([initialGuess]);
  const guessRoundListLength = guessRounds.length;

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver(guessRoundListLength);
    }
  }, [currentGuess, userNumber, onGameOver]);

  useEffect(() => {
    minBoundry = 1;
    maxBoundry = 100;
  }, []);

  function nextGuessHandler(direction: string) {
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "higher" && currentGuess > userNumber)
    ) {
      Alert.alert("Dont lie", "You know this is wrong...", [
        { text: "sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") {
      maxBoundry = currentGuess;
    } else if (direction === "higher") {
      minBoundry = currentGuess + 1;
    }
    const rndNum = generateRandomNumber(minBoundry, maxBoundry, currentGuess);
    setCurrentGuess(rndNum);
    setGuessRounds([rndNum, ...guessRounds]);
  }

  return (
    <View style={styles.gameContainer}>
      <Title>Opponents Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <InstrutionText style={styles.numberText}>
          Higher or Lower?
        </InstrutionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler("higher")}>
              <Ionicons name="md-add" size={18} color="white" />
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={() => nextGuessHandler("lower")}>
              <Ionicons name="md-remove" size={18} color="white" />
            </PrimaryButton>
          </View>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRounds}
          keyExtractor={(item) => String(item)}
          renderItem={(guessRound) => (
            <GuessLogItem
              roundNumber={guessRoundListLength - guessRound.index}
              guess={guessRound.item}
            />
          )}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    padding: 24,
    alignItems: "center",
  },
  numberText: {
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flex: 1,
  },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});

export default Game;
