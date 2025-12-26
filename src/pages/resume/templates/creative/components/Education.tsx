import type { AiGeneratedResume } from "@/lib/types/AiGeneratedResume";
import type { ICreativeColors } from "..";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

interface props {
  data: AiGeneratedResume["education"];
  colors: ICreativeColors;
}
export default function Education({ data, colors }: props) {
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
    educationItem: {
      marginBottom: 12,
      padding: 16,
      backgroundColor: "#06b5d418",
      borderRadius: 8,
    },
    degree: {
      fontSize: 12,
      fontWeight: "",
      fontFamily: "Helvetica-Bold",
      color: colors.text,
      marginBottom: 4,
    },
    university: {
      fontSize: 11,
      fontWeight: "semiBold",
      fontFamily: "Helvetica-Bold",
      color: colors.text,
      marginBottom: 4,
    },
    dates: {
      fontSize: 10,
      color: colors.secondaryText,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Education</Text>
      {data.map((edu, index) => (
        <View key={index} style={styles.educationItem}>
          <Text style={styles.degree}>
            {edu.degree} in {edu.fieldOfStudy}
          </Text>
          <Text style={styles.university}>{edu.university}</Text>
          <Text style={styles.dates}>
            {edu.startDate} - {edu.stillStudying ? "Now" : edu.endDate}
          </Text>
        </View>
      ))}
    </View>
  );
}
