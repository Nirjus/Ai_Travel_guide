import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function TripManagerScreen() {
  return (
    <View style={styles.container}>
      <Text>TripManagerScreen</Text>
        <Text>
            Here we provide tour related AI guide, ai question and answering, or myTrip ai questions
        </Text>
        <Text>
            list of more tour related suggestions like select best package, set best destination, based on what trip user is created, previously, now there is also load that data
        </Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        padding: 20,
        marginTop: 20
    }
})