import type { AiGeneratedResume } from "@/lib/types/AiGeneratedResume";
import type { ClassicColors } from "..";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

interface props {
  data: AiGeneratedResume["personalInfo"];
  colors: ClassicColors;
}

export default function PersonalInfo({ data, colors }: props) {
  const styles = StyleSheet.create({
    container: {
      marginBottom: 32,
    },
    name: {
      fontSize: 28,
      fontWeight: "bold",
      fontFamily: "Times-Bold",
      textAlign: "center",
      letterSpacing: 3,
      color: colors.black,
      marginBottom: 12,
    },
    contactContainer: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      maxWidth: "70%",
      marginHorizontal: "auto",
      fontSize: 10,
    },
    contactItem: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 12,
      color: colors.black,
    },
  });

  return (
    <View wrap={false} style={styles.container}>
      <Text style={styles.name}>{data.fullName}</Text>
      <View style={styles.contactContainer}>
        <Text style={styles.contactItem}>{data.address}</Text>
        <Text style={styles.contactItem}>{data.email}</Text>
        <Text style={styles.contactItem}>{data.phone}</Text>
      </View>
    </View>
  );
}
