import type { AiGeneratedResume } from "@/lib/types/AiGeneratedResume";
import type { Experience } from "@/lib/types/buildResumeTypes";
import type { ICreativeColors } from "..";
import { StyleSheet } from "@react-pdf/renderer";
import { Text, View } from "@react-pdf/renderer";

interface props {
  data: AiGeneratedResume["experience"];
  colors: ICreativeColors;
}

export function Experience({ data, colors }: props) {
  const styles = StyleSheet.create({
    container: {
      marginBottom: 24,
    },
    title: {
      fontSize: 18,
      fontWeight: "bold",
      fontFamily: "Helvetica-Bold",
      color: colors.text,
      marginBottom: 16,
      borderBottom: `4px solid ${colors.primary}`,
      paddingBottom: 4,
    },
    experienceItem: {
      marginBottom: 20,
      paddingLeft: 20,
      borderLeft: `2px solid ${colors.accent}`,
      position: "relative",
    },
    position: {
      fontSize: 14,
      fontWeight: "bold",
      fontFamily: "Helvetica-Bold",
      color: colors.text,
      marginBottom: 4,
    },
    company: {
      fontSize: 11,
      color: colors.primary,
      fontWeight: "bold",
      fontFamily: "Helvetica-Bold",
    },
    dates: {
      fontSize: 10,
      color: colors.secondaryText,
      marginTop: 2,
      marginBottom: 8,
    },
    responsibility: {
      fontSize: 10,
      color: colors.secondaryText,
      marginBottom: 4,
      paddingLeft: 0,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experience</Text>
      {data.map((exp, index) => (
        <View key={index} style={styles.experienceItem}>
          <Text style={styles.position}>{exp.position}</Text>
          <Text style={styles.company}>{exp.company}</Text>
          <Text style={styles.dates}>
            {exp.startDate} - {exp.endDate || "Present"}
          </Text>
          {exp.responsibilities.map((item, i) => (
            <Text key={i} style={styles.responsibility}>
              • {item}
            </Text>
          ))}
        </View>
      ))}
    </View>
  );
}
