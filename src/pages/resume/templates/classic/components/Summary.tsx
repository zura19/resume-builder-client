import type { ClassicColors } from "..";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

interface props {
  text: string;
  colors: ClassicColors;
}

export default function Summary({ text }: props) {
  const styles = StyleSheet.create({
    container: {
      marginBottom: 32,
    },
    text: {
      fontSize: 11,
      lineHeight: 1.8,
      color: "#333",
      //   fontFamily: "Times-Bold",
      textAlign: "justify",
      fontWeight: "",
      //   fontWeight: "Regular",
    },
  });

  return (
    <View wrap={false} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
