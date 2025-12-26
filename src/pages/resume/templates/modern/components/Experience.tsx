import type { AiGeneratedResume } from "@/lib/types/AiGeneratedResume";
import type { ModernColors } from "..";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

interface props {
  data: AiGeneratedResume["experience"];
  colors: ModernColors;
}

export default function Experience({ data, colors }: props) {
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
    experienceItem: {
      marginBottom: 24,
      paddingLeft: 16,
      borderLeft: `4px solid ${colors.primary}`,
    },
    header: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      marginBottom: 12,
    },
    leftHeader: {
      flex: 1,
    },
    position: {
      fontSize: 12,
      fontWeight: "bold",
      fontFamily: "Helvetica-Bold",
      color: colors.text,
      marginBottom: 4,
    },
    company: {
      fontSize: 11,
      fontWeight: "bold",
      fontFamily: "Helvetica-Bold",
      color: colors.text,
    },
    dates: {
      fontSize: 10,
      color: colors.textTertiary,
      whiteSpace: "nowrap",
    },
    responsibility: {
      fontSize: 10,
      color: colors.text,
      marginBottom: 8,
      display: "flex",
      flexDirection: "row",
      lineHeight: 1.5,
    },
    bullet: {
      color: colors.primary,
      marginRight: 8,
      marginTop: 2,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WORK EXPERIENCE</Text>
      {data.map((exp, index) => (
        <View key={index} style={styles.experienceItem}>
          <View style={styles.header}>
            <View style={styles.leftHeader}>
              <Text style={styles.position}>{exp.position}</Text>
              <Text style={styles.company}>{exp.company}</Text>
            </View>
            <Text style={styles.dates}>
              {exp.startDate} - {exp.endDate || "Present"}
            </Text>
          </View>
          {exp.responsibilities.map((resp, idx) => (
            <View key={idx} style={styles.responsibility}>
              <Text style={styles.bullet}>•</Text>
              <Text style={{ flex: 1 }}>{resp}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}
