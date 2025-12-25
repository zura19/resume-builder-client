import type { AiGeneratedResume } from "@/lib/types/AiGeneratedResume";
import type { ClassicColors } from "..";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

interface props {
  data: AiGeneratedResume["skills"];
  colors: ClassicColors;
}

export default function Skills({ data, colors }: props) {
  const styles = StyleSheet.create({
    container: {
      marginBottom: 32,
    },
    title: {
      fontSize: 14,
      fontWeight: "bold",
      fontFamily: "Times-Bold",
      color: colors.black,
      paddingBottom: 8,
      marginBottom: 16,
      borderBottom: `2px solid ${colors.black}`,
    },
    skillRow: {
      display: "flex",
      flexDirection: "row",
      marginBottom: 8,
      gap: 8,
    },
    label: {
      fontSize: 10,
      fontFamily: "Times-Bold",
      color: colors.black,
      width: 90,
      flexShrink: 0,
    },
    skillList: {
      fontSize: 10,
      fontFamily: "Times-Italic",
      color: colors.black,
      flex: 1,
      lineHeight: 1.5,
    },
  });

  return (
    <View wrap={false} style={styles.container}>
      <Text style={styles.title}>Skills</Text>

      <View style={styles.skillRow}>
        <Text style={styles.label}>Soft Skills:</Text>
        <Text style={styles.skillList}>{data.soft.join(", ")}</Text>
      </View>

      <View style={styles.skillRow}>
        <Text style={styles.label}>Technologies:</Text>
        <Text style={styles.skillList}>{data.technical.join(", ")}</Text>
      </View>

      <View style={styles.skillRow}>
        <Text style={styles.label}>Languages:</Text>
        <Text style={styles.skillList}>{data.languages.join(", ")}</Text>
      </View>
    </View>
  );
}
