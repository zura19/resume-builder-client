import type { AiGeneratedResume } from "@/lib/types/AiGeneratedResume";
import type { ExecutiveColors } from "..";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

interface props {
  data: AiGeneratedResume["skills"];
  colors: ExecutiveColors;
}

export default function Skills({ data, colors }: props) {
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
    skillsGrid: {
      display: "flex",
      flexDirection: "row",
      gap: 32,
    },
    skillCategory: {
      flex: 1,
    },
    categoryHeader: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
      marginBottom: 16,
      paddingBottom: 12,
      borderBottom: `2px solid ${colors.accent}`,
    },
    categoryIcon: {
      fontSize: 16,
      color: colors.accent,
    },
    categoryTitle: {
      fontSize: 12,
      fontWeight: "bold",
      fontFamily: "Helvetica-Bold",
      color: colors.text,
    },
    skillItem: {
      display: "flex",
      flexDirection: "row",
      alignItems: "flex-start",
      gap: 8,
      marginBottom: 8,
    },
    skillBullet: {
      color: colors.accent,
      fontWeight: "bold",
      fontFamily: "Helvetica-Bold",
      fontSize: 12,
      marginTop: 2,
    },
    skillText: {
      fontSize: 10,
      color: colors.textTertiary,
      flex: 1,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CORE COMPETENCIES</Text>
      <View style={styles.skillsGrid}>
        <View style={styles.skillCategory}>
          <View style={styles.categoryHeader}>
            {/* <Text style={styles.categoryIcon}>👥</Text> */}
            <Text style={styles.categoryTitle}>Soft Skills</Text>
          </View>
          {data.soft.map((skill, i) => (
            <View key={i} style={styles.skillItem}>
              <Text style={styles.skillBullet}>▪</Text>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>

        <View style={styles.skillCategory}>
          <View style={styles.categoryHeader}>
            {/* <Text style={styles.categoryIcon}>💻</Text> */}
            <Text style={styles.categoryTitle}>Technical</Text>
          </View>
          {data.technical.map((skill, i) => (
            <View key={i} style={styles.skillItem}>
              <Text style={styles.skillBullet}>▪</Text>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>

        <View style={styles.skillCategory}>
          <View style={styles.categoryHeader}>
            {/* <Text style={styles.categoryIcon}>📈</Text> */}
            <Text style={styles.categoryTitle}>Languages</Text>
          </View>
          {data.languages.map((skill, i) => (
            <View key={i} style={styles.skillItem}>
              <Text style={styles.skillBullet}>▪</Text>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}
