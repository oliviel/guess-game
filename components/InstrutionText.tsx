import { StyleSheet, Text } from "react-native";
import defaultTheme from "../constants/theme";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  style?: object;
}

const InstrutionText = ({ children, style }: Props) => {
  return <Text style={[styles.instrutionText, style]}>{children}</Text>;
};

const styles = StyleSheet.create({
  instrutionText: {
    fontFamily: "finalfantasy",
    fontSize: 24,
    color: defaultTheme.colors.secondary500,
  },
});

export default InstrutionText;
