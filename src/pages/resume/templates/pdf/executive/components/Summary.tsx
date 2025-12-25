import type { ExecutiveColors } from "..";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

interface props {
  text: string;
  colors: ExecutiveColors;
}

export default function Summary({ text, colors }: props) {
  const styles = StyleSheet.create({
    container: {
      marginBottom: 32,
      paddingLeft: 24,
      borderLeft: `4px solid ${colors.accent}`,
    },
    title: {
      fontSize: 16,
      fontWeight: "bold",
      fontFamily: "Helvetica-Bold",
      color: colors.text,
      marginBottom: 16,
      textTransform: "uppercase",
      letterSpacing: 1,
    },
    text: {
      fontSize: 12,
      color: colors.textTertiary,
      lineHeight: 1.6,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>EXECUTIVE SUMMARY</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
