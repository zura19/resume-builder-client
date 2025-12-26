import type { AiGeneratedResume } from "@/lib/types/AiGeneratedResume";
import type { ICreativeColors } from "..";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

interface props {
  data: AiGeneratedResume["projects"];
  colors: ICreativeColors;
}

export default function Projects({ data, colors }: props) {
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
    projectItem: {
      marginBottom: 16,
      padding: 12,
      border: `1px solid ${colors.accent}`,
      borderRadius: 8,
    },
    projectTitle: {
      fontSize: 13,
      fontWeight: "bold",
      fontFamily: "Helvetica-Bold",
      color: colors.text,
      marginBottom: 8,
    },
    feature: {
      fontSize: 10,
      color: colors.secondaryText,
      marginBottom: 4,
      paddingLeft: 0,
    },
    techContainer: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      gap: 6,
      marginTop: 8,
    },
    techBadge: {
      backgroundColor: "#06b5d44f",
      color: colors.secondaryText,
      borderRadius: 12,
      padding: "4px 10px",
      fontSize: 9,
    },
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Projects</Text>
      {data.map((project, index) => (
        <View key={index} style={styles.projectItem}>
          <Text style={styles.projectTitle}>{project.title}</Text>
          {project.features.map((feature, i) => (
            <Text key={i} style={styles.feature}>
              • {feature}
            </Text>
          ))}
          <View style={styles.techContainer}>
            {project.technologies.map((tech, i) => (
              <Text key={i} style={styles.techBadge}>
                {tech}
              </Text>
            ))}
          </View>
        </View>
      ))}
    </View>
  );
}
