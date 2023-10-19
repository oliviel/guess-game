import { ReactNode } from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import defaultTheme from "../constants/theme";

interface Props {
  children: ReactNode;
}

const NumberContainer = ({ children }: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
};

const deviceWith = Dimensions.get("window").width;

const styles = StyleSheet.create({
  container: {
    margin: deviceWith < 380 ? 12 : 24,
    padding: deviceWith < 380 ? 12 : 24,
    borderWidth: 4,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    borderColor: defaultTheme.colors.secondary500,
  },
  numberText: {
    fontSize: deviceWith < 380 ? 12 : 36,
    fontWeight: "bold",
    color: defaultTheme.colors.secondary500,
  },
});

export default NumberContainer;
