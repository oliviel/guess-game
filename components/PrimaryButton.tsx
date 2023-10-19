import { ReactNode } from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import defaultTheme from "../constants/theme";

interface Props {
  children: ReactNode;
  onPress: () => void;
}

const PrimaryButton = ({ children, onPress }: Props) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [{ opacity: 0.75, ...styles.buttonInnerContainer }]
            : styles.buttonInnerContainer
        }
        android_ripple={{ color: defaultTheme.colors.primary600 }}
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    backgroundColor: defaultTheme.colors.primary500,
  },
  container: {
    margin: 4,
    elevation: 2,
    borderRadius: 28,
    backgroundColor: defaultTheme.colors.primary500,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});

export default PrimaryButton;
