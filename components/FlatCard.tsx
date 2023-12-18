import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function FlatCard() {
  return (
    <View>
        
      <Text style={styles.headingText}>Flat Card</Text>
     
      <View style={styles.Container}>
        <View style={[styles.card, styles.cardOne]}><Text>Red</Text></View>
        <View style={[styles.card, styles.cardThree]}><Text>Cyan</Text></View>
        <View style={[styles.card, styles.cardTwo]}><Text>Maroon</Text></View>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    Container:{
        flex:1,
        flexDirection:'row',
        padding:8
        
        
        
    },
    headingText:{
        fontSize:32,
        fontWeight:'bold',
        marginTop:18,
        paddingHorizontal:32,
        

    },
    card:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        margin:24,
        borderRadius:6,
    },
    cardOne:{
        backgroundColor:'#EF5354',


    },
    cardTwo:{
        backgroundColor:'#870058',


    },
    cardThree:{
        backgroundColor:'#99D5C9',


    },
})