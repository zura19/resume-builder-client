import type { AiGeneratedResume } from "@/lib/types/AiGeneratedResume";
import type { ExecutiveColors } from "..";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

interface props {
  data: AiGeneratedResume["experience"];
  colors: ExecutiveColors;
}

export default function Experience({ data, colors }: props) {
  const styles = StyleSheet.create({
    container: {
      // marginBottom: 32,
    },
    title: {
      fontSize: 16,
      fontWeight: "bold",
      fontFamily: "Helvetica-Bold",
      color: colors.text,
      marginBottom: 24,
      textTransform: "uppercase",
      letterSpacing: 1,
      borderBottom: `2px solid ${colors.border}`,
      paddingBottom: 8,
    },
    experienceItem: {
      marginBottom: 32,
      paddingLeft: 24,
      borderLeft: `2px solid ${colors.border}`,
    },
    position: {
      fontSize: 14,
      fontWeight: "bold",
      fontFamily: "Helvetica-Bold",
      color: colors.text,
      marginBottom: 4,
    },
    companyLine: {
      fontSize: 10,
      color: colors.textSecondary,
      marginTop: 4,
      marginBottom: 4,
    },
    company: {
      fontWeight: "bold",
      fontFamily: "Helvetica-Bold",
    },
    dates: {
      fontSize: 9,
      color: colors.textLight,
      marginBottom: 12,
    },
    responsibility: {
      fontSize: 10,
      color: colors.textTertiary,
      marginBottom: 8,
      paddingLeft: 16,
      display: "flex",
      flexDirection: "row",
    },
    bullet: {
      color: colors.accent,
      fontWeight: "bold",
      fontFamily: "Helvetica-Bold",
      marginRight: 8,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>PROFESSIONAL EXPERIENCE</Text>
      {data.map((exp, index) => (
        <View key={index} style={styles.experienceItem}>
          <Text style={styles.position}>{exp.position}</Text>
          <Text style={styles.companyLine}>
            <Text style={styles.company}>{exp.company}</Text> | {exp.position}
          </Text>
          <Text style={styles.dates}>
            {exp.startDate} - {exp.endDate || "Present"}
          </Text>
          {exp.responsibilities.map((item, i) => (
            <View key={i} style={styles.responsibility}>
              <Text style={styles.bullet}>•</Text>
              <Text style={{ flex: 1 }}>{item}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}
