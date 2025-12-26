import type { AiGeneratedResume } from "@/lib/types/AiGeneratedResume";
import type { ClassicColors } from "..";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

interface props {
  data: AiGeneratedResume["projects"];
  colors: ClassicColors;
}

export default function Projects({ data, colors }: props) {
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
    projectItem: {
      marginBottom: 20,
    },
    projectTitle: {
      fontSize: 12,
      fontFamily: "Times-Bold",
      color: colors.black,
      marginBottom: 4,
    },
    technologies: {
      fontSize: 10,
      fontFamily: "Times-Italic",
      color: colors.gray,
      marginBottom: 12,
    },
    feature: {
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
      <Text style={styles.title}>Projects</Text>
      {data.map((project, index) => (
        <View key={index} style={styles.projectItem}>
          <Text style={styles.projectTitle}>{project.title}</Text>
          <Text style={styles.technologies}>
            {project.technologies.join(", ")}
          </Text>
          {project.features.map((feature, idx) => (
            <View key={idx} style={styles.feature}>
              <View style={styles.bullet} />
              <Text style={{ flex: 1 }}>{feature}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}
