import type React from "react"
import { View, Text, StyleSheet } from "react-native"

interface InfoItemProps {
  label: string
  value: string
}

export const InfoItem: React.FC<InfoItemProps> = ({ label, value }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}:</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    marginBottom: 8,
  },
  label: {
    fontWeight: "bold",
    marginRight: 8,
  },
  value: {
    flex: 1,
  },
})

