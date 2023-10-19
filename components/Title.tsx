import { ReactNode } from "react";
import { Text, StyleSheet, Platform } from "react-native";
import defaultTheme from "../constants/theme";

interface Props {
  children: ReactNode;
}

const Title = ({ children }: Props) => {
  return <Text style={styles.title}>{children}</Text>;
};

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    borderWidth: Platform.select({ ios: 0, android: 2 }),
    borderColor: "white",
    padding: 12,
    maxWidth: "80%",
    width: 300,
  },
});

export default Title;
