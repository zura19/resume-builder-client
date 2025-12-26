import type { AiGeneratedResume } from "@/lib/types/AiGeneratedResume";
import type { ClassicColors } from "..";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

interface props {
  data: AiGeneratedResume["experience"];
  colors: ClassicColors;
}

export default function Experience({ data, colors }: props) {
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
    experienceItem: {
      marginBottom: 20,
    },
    header: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 4,
    },
    company: {
      fontSize: 12,
      fontFamily: "Times-Bold",
      color: colors.black,
    },
    dates: {
      fontSize: 10,
      color: colors.black,
    },
    position: {
      fontSize: 11,
      fontFamily: "Times-Italic",
      color: colors.gray,
      marginBottom: 12,
    },
    responsibility: {
      fontSize: 10,
      color: colors.black,
      marginBottom: 6,
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      lineHeight: 1.5,
    },
    bullet: {
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: colors.black,
      marginRight: 8,
      marginTop: 4,
    },
  });

  return (
    <View wrap={false} style={styles.container}>
      <Text style={styles.title}>Experience</Text>
      {data.map((exp, index) => (
        <View key={index} style={styles.experienceItem}>
          <View style={styles.header}>
            <Text style={styles.company}>{exp.company}</Text>
            <Text style={styles.dates}>
              {exp.startDate} - {exp.endDate || "Present"}
            </Text>
          </View>
          <Text style={styles.position}>{exp.position}</Text>
          {exp.responsibilities.map((resp, idx) => (
            <View key={idx} style={styles.responsibility}>
              <View style={styles.bullet} />
              <Text style={{ flex: 1 }}>{resp}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}
