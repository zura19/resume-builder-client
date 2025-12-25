import type { AiGeneratedResume } from "@/lib/types/AiGeneratedResume";
import type { ExecutiveColors } from "..";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

interface props {
  data: AiGeneratedResume["education"];
  colors: ExecutiveColors;
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
      marginBottom: 24,
      textTransform: "uppercase",
      letterSpacing: 1,
      borderBottom: `2px solid ${colors.border}`,
      paddingBottom: 8,
    },
    educationItem: {
      marginBottom: 24,
      display: "flex",
      flexDirection: "row",
      gap: 16,
    },
    iconCircle: {
      width: 48,
      height: 48,
      backgroundColor: colors.accent,
      borderRadius: 24,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
    icon: {
      fontSize: 20,
      color: colors.white,
    },
    content: {
      flex: 1,
    },
    degree: {
      fontSize: 12,
      fontWeight: "bold",
      fontFamily: "Helvetica-Bold",
      color: colors.text,
      marginBottom: 4,
    },
    field: {
      fontSize: 11,
      color: colors.textSecondary,
      fontWeight: "bold",
      fontFamily: "Helvetica-Bold",
      marginBottom: 4,
    },
    university: {
      fontSize: 10,
      color: colors.textTertiary,
      marginBottom: 4,
    },
    dates: {
      fontSize: 9,
      color: colors.textLight,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>EDUCATION</Text>
      {data.map((edu, index) => (
        <View key={index} style={styles.educationItem}>
          <View style={styles.iconCircle}>
            {/* <Text style={styles.icon}>🎓</Text> */}
          </View>
          <View style={styles.content}>
            <Text style={styles.degree}>{edu.degree}</Text>
            <Text style={styles.field}>{edu.fieldOfStudy}</Text>
            <Text style={styles.university}>{edu.university}</Text>
            <Text style={styles.dates}>
              {edu.startDate} - {edu.stillStudying ? "Present" : edu.endDate}
            </Text>
          </View>
        </View>
      ))}
    </View>
  );
}
