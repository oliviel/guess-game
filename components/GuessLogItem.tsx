import { View, Text, StyleSheet } from "react-native";
import defaultTheme from "../constants/theme";

interface Props {
  roundNumber: number;
  guess: number;
}

const GuessLogItem = ({ roundNumber, guess }: Props) => {
  return (
    <View style={styles.listItem}>
      <Text>#{roundNumber}</Text>
      <Text>Opponent Guess: {guess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  listItem: {
    padding: 12,
    marginVertical: 8,
    borderEndWidth: 1,
    borderRadius: 40,
    borderColor: defaultTheme.colors.primary800,
    backgroundColor: defaultTheme.colors.secondary500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
});

export default GuessLogItem;
