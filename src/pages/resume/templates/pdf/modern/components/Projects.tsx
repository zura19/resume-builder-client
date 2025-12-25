import type { AiGeneratedResume } from "@/lib/types/AiGeneratedResume";
import type { ModernColors } from "..";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

interface props {
  data: AiGeneratedResume["projects"];
  colors: ModernColors;
}

export default function Projects({ data, colors }: props) {
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
    projectItem: {
      marginBottom: 24,
      paddingLeft: 16,
      borderLeft: `4px solid ${colors.primary}`,
    },
    projectTitle: {
      fontSize: 12,
      fontWeight: "bold",
      fontFamily: "Helvetica-Bold",
      color: colors.text,
      marginBottom: 12,
    },
    techSection: {
      marginBottom: 12,
    },
    techLabel: {
      fontSize: 9,
      color: colors.textTertiary,
      fontWeight: "bold",
      fontFamily: "Helvetica-Bold",
      marginBottom: 4,
    },
    techContainer: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 8,
    },
    techBadge: {
      backgroundColor: colors.primaryLight,
      color: colors.primary,
      borderRadius: 3,
      padding: "3px 8px",
      fontSize: 8,
      //   border: `1px solid b`,
    },
    feature: {
      fontSize: 10,
      color: colors.text,
      marginBottom: 6,
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
      <Text style={styles.title}>PROJECTS</Text>
      {data.map((project, index) => (
        <View key={index} style={styles.projectItem}>
          <Text style={styles.projectTitle}>{project.title}</Text>

          <View style={styles.techSection}>
            <Text style={styles.techLabel}>Technologies:</Text>
            <View style={styles.techContainer}>
              {project.technologies.map((tech, idx) => (
                <Text key={idx} style={styles.techBadge}>
                  {tech}
                </Text>
              ))}
            </View>
          </View>

          {project.features.map((feature, idx) => (
            <View key={idx} style={styles.feature}>
              <Text style={styles.bullet}>•</Text>
              <Text style={{ flex: 1 }}>{feature}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}
