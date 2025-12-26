import { StyleSheet } from "@react-pdf/renderer";
import { Text, View } from "@react-pdf/renderer";

interface props {
  colors: {
    primary: string;
    accent: string;
    background: string;
    text: string;
    secondaryText: string;
  };
  text: string;
}

export default function Summary({ colors, text }: props) {
  const styles = StyleSheet.create({
    container: {
      marginBottom: 24,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      fontFamily: "Helvetica-Bold",
      color: colors.text,
      marginBottom: 8,
      borderBottom: `4px solid ${colors.primary}`,
      paddingBottom: 4,
      //   display: "inline-block",
    },
    text: {
      fontSize: 11,
      color: colors.secondaryText,
      lineHeight: 1.6,
      marginTop: 8,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Me</Text>
      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
