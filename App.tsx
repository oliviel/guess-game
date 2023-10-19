import { useEffect, useState } from "react";
import { ImageBackground, StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { SafeAreaView } from "react-native-safe-area-context";
import { LinearGradient } from "expo-linear-gradient";
import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import StartGame from "./screens/StartGame";
import Game from "./screens/Game";
import GameOver from "./screens/GameOver";
import defaultTheme from "./constants/theme";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  const [guessRounds, setGuessRounds] = useState(0);
  const [gamesIsOver, setGameIsOver] = useState(false);
  const [isLoadingFonts] = useFonts({
    finalfantasy: require("./assets/fonts/final_fantasy.ttf"),
  });

  function pickedNumberHandler(pickedNumber: number) {
    setUserNumber(pickedNumber);
  }

  function handleGameOver(numberOfRounds: number) {
    setGameIsOver(true);
    setGuessRounds(numberOfRounds);
  }

  function handlerReset() {
    setUserNumber(null);
    setGameIsOver(false);
  }

  let screen = <StartGame onPickNumber={pickedNumberHandler} />;

  if (userNumber && !gamesIsOver) {
    screen = <Game userNumber={userNumber} onGameOver={handleGameOver} />;
  }

  if (gamesIsOver && userNumber) {
    screen = (
      <GameOver
        userNumber={userNumber}
        roundsNumber={guessRounds}
        onStartNewGame={handlerReset}
      />
    );
  }

  useEffect(() => {
    async function ready() {
      await SplashScreen.hideAsync();
    }

    if (isLoadingFonts) {
      ready();
    }
  }, [isLoadingFonts]);

  if (!isLoadingFonts) {
    return undefined;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="light" />
      <LinearGradient
        colors={[
          defaultTheme.colors.primary800,
          defaultTheme.colors.secondary500,
        ]}
        style={styles.rootContainer}
      >
        <ImageBackground
          source={require("./assets/images/dice.jpeg")}
          resizeMode="cover"
          style={styles.rootContainer}
          imageStyle={{
            opacity: 0.15,
          }}
        >
          <SafeAreaView style={styles.rootContainer}>{screen}</SafeAreaView>
        </ImageBackground>
      </LinearGradient>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
  },
});
