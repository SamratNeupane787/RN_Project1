import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ElevatedCards() {
  return (
    <View>
      <Text style={styles.headingText}>Elevated Cards</Text>
    <ScrollView  horizontal={true} style={styles.container}>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Taps</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Mess</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>To</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>Scro;l</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
            <Text>🎂🎂🎂</Text>
        </View>
    </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    headingText:{
        fontSize:32,
        fontWeight:'bold',
        marginTop:18,
        paddingHorizontal:32,
        

    },
    container:{
        padding:8,
        flex:1,
        flexDirection:'row',
        

    },
    card:{
        width:100,
        height:100,
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        margin:8,
        borderRadius:6,

    },
    cardElevated:{
        backgroundColor:'#78A1BB',
        elevation:8,
    },

})