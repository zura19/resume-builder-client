import type { AiGeneratedResume } from "@/lib/types/AiGeneratedResume";
import type { ModernColors } from "..";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

interface props {
  data: AiGeneratedResume["education"];
  colors: ModernColors;
}

export default function Education({ data, colors }: props) {
  const styles = StyleSheet.create({
    container: {
      marginBottom: 32,
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
    educationItem: {
      marginBottom: 24,
      paddingLeft: 16,
      borderLeft: `4px solid ${colors.primary}`,
    },
    header: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 8,
    },
    leftHeader: {
      flex: 1,
    },
    degree: {
      fontSize: 12,
      fontWeight: "bold",
      fontFamily: "Helvetica-Bold",
      color: colors.text,
      marginBottom: 4,
    },
    university: {
      fontSize: 11,
      fontWeight: "bold",
      fontFamily: "Helvetica-Bold",
      color: colors.text,
      marginBottom: 4,
    },
    field: {
      fontSize: 10,
      color: colors.textTertiary,
    },
    dates: {
      fontSize: 10,
      color: colors.textTertiary,
      whiteSpace: "nowrap",
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>EDUCATION</Text>
      {data.map((edu, index) => (
        <View key={index} style={styles.educationItem}>
          <View style={styles.header}>
            <View style={styles.leftHeader}>
              <Text style={styles.degree}>{edu.degree}</Text>
              <Text style={styles.university}>{edu.university}</Text>
              <Text style={styles.field}>{edu.fieldOfStudy}</Text>
            </View>
            <Text style={styles.dates}>
              {edu.startDate} - {edu.stillStudying ? "Present" : edu.endDate}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}
