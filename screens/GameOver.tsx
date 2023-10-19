import {
  Image,
  View,
  StyleSheet,
  Text,
  Dimensions,
  useWindowDimensions,
  KeyboardAvoidingView,
} from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import Title from "../components/Title";
import defaultTheme from "../constants/theme";

interface Props {
  userNumber: number;
  roundsNumber: number;
  onStartNewGame: () => void;
}

const GameOver = ({ onStartNewGame, userNumber, roundsNumber }: Props) => {
  const { width } = useWindowDimensions();

  console.log("width", width);

  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.jpeg")}
        />
      </View>
      <View>
        <Text style={styles.summaryText}>
          Your phone needed{" "}
          <Text style={styles.textHighligth}>{roundsNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.textHighligth}>{userNumber}</Text>.
        </Text>
      </View>
      <PrimaryButton onPress={onStartNewGame}>
        <Text style={{ fontSize: 16 }}>Start New Game</Text>
      </PrimaryButton>
    </View>
  );
};

const deviceWith = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    width: deviceWith < 380 ? 150 : 300,
    height: deviceWith < 380 ? 150 : 300,
    borderRadius: deviceWith < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: defaultTheme.colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  summaryText: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 24,
  },
  textHighligth: {
    color: defaultTheme.colors.primary800,
  },
});

export default GameOver;
