import type { AiGeneratedResume } from "@/lib/types/AiGeneratedResume";
import type { ExecutiveColors } from "..";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

interface props {
  data: AiGeneratedResume["projects"];
  colors: ExecutiveColors;
}

export default function Projects({ data, colors }: props) {
  const styles = StyleSheet.create({
    container: {
      marginTop: 32,
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
    projectItem: {
      marginBottom: 24,
      padding: 24,
      backgroundColor: colors.backgroundLight,
      border: `1px solid ${colors.border}`,
      borderRadius: 4,
    },
    projectHeader: {
      display: "flex",
      flexDirection: "row",
      gap: 12,
      // marginBottom: 12,
    },
    projectTitle: {
      fontSize: 14,
      fontWeight: "bold",
      fontFamily: "Helvetica-Bold",
      color: colors.text,
    },
    section: {
      marginTop: 16,
      paddingTop: 16,
      borderTop: `1px solid ${colors.borderAccent}`,
    },
    sectionLabel: {
      fontSize: 9,
      fontWeight: "bold",
      fontFamily: "Helvetica-Bold",
      color: colors.textSecondary,
      marginBottom: 8,
    },
    feature: {
      fontSize: 10,
      color: colors.textSecondary,
      marginBottom: 4,
      paddingLeft: 12,
    },
    techContainer: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 8,
      marginTop: 8,
    },
    techBadge: {
      backgroundColor: colors.primary,
      color: colors.white,
      borderRadius: 3,
      padding: "4px 12px",
      fontSize: 8,
    },
  });

  return (
    <View wrap={false} style={styles.container}>
      <Text style={styles.title}>KEY INITIATIVES & PROJECTS</Text>
      {data.map((project, index) => (
        <View key={index} style={styles.projectItem}>
          <View style={styles.projectHeader}>
            {/* <Text style={{ fontSize: 16 }}>🏆</Text> */}
            <Text style={styles.projectTitle}>{project.title}</Text>
          </View>

          <View style={styles.section}>
            <Text style={styles.sectionLabel}>Features:</Text>
            {project.features.map((feature, i) => (
              <Text key={i} style={styles.feature}>
                • {feature}
              </Text>
            ))}
          </View>

          <View
            style={[
              styles.section,
              { borderTop: "none", marginTop: 12, paddingTop: 0 },
            ]}
          >
            <Text style={styles.sectionLabel}>Technologies:</Text>
            <View style={styles.techContainer}>
              {project.technologies.map((tech, i) => (
                <Text key={i} style={styles.techBadge}>
                  {tech}
                </Text>
              ))}
            </View>
          </View>
        </View>
      ))}
    </View>
  );
}
